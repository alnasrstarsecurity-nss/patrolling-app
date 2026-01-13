const FIRE_SCRIPT_URL ="https://script.google.com/macros/s/AKfycbyyQSaAQsi781cP2JpxoIzVQSglqt-Cx9PWfhdV-r-U8O9LN2mHd02zdDm8hJyi4SZY/exec";

const form = document.getElementById("fireForm");
const status = document.getElementById("status");
const submitBtn = form.querySelector('button[type="submit"]');

//specify damage
const damageRadios = document.querySelectorAll('input[name="Damage"]');
const specifyDamage = document.getElementById("SpecifyDamage");

damageRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    if (radio.value === "Yes" && radio.checked) {
      specifyDamage.required = true;
    } else if (radio.value === "No" && radio.checked) {
      specifyDamage.required = false;
      specifyDamage.value = ""; // optional: clear field
    }
  });
});
//specify damage
//alarm activated mandatory
const alarmChecks = document.querySelectorAll('input[name="AlarmActivated"]');
const alarmError = document.getElementById("alarmError");

form.addEventListener("submit", function (e) {
  const checked = Array.from(alarmChecks).some(cb => cb.checked);

  if (!checked) {
    e.preventDefault();          // ⛔ stop submit
    alarmError.style.display = "block";
    alarmChecks[0].focus();
  } else {
    alarmError.style.display = "none";
  }
});
//alarm activated mandatory

function radio(name) {
  const r = document.querySelector(`input[name="${name}"]:checked`);
  return r ? r.value : "";
}

function getCheckedValues(name) {
  return [...document.querySelectorAll(`input[name="${name}"]:checked`)]
    .map(c => c.value)
    .join(", ");
}

form.addEventListener("submit", e => {
  e.preventDefault();

    submitBtn.disabled = true;

  status.innerText = "Submitting...";
  status.style.color = "blue";

  // Build payload using EXACT SHEET COLUMN NAMES
  const payload = {
    "Timestamp": new Date().toLocaleString(),
    "Building Name": BuildingName.value,
    "Type of Incident": radio("TypeofInciden"),
    "Evacuated": radio("guardPosition"),
    "Date of Incident": Incidentdate.value,
    "Incident Time": Incidenttime.value,
    "Panel Reset Time": paneltime.value,

    "Alarm Activated In": getCheckedValues("AlarmActivated"),
    "Other Area": Area.value,

    "Occupant Name": OccupantName.value,
    "Occupant Nationality": OccupantNationality.value,
    "Floor No": FloorNo.value,
    "Flat No": FlatNo.value,
    "Staff Number": StaffNumber.value,
    "Department": Department.value,
    "Room No": RoomNo.value,

    "Occupant Was In": getCheckedValues("OccupantWasIn"),

    "Exhaust Fan": radio("ExhaustFan"),
    "Kitchen Cooking Hood": radio("KitchenCookingHood"),
    "Kitchen Door": radio("KitchenDoor"),
    "Fire Blanket Used": radio("FireBlanket"),
    "Fire Extinguisher Used": radio("FireExtinguisher"),

    "Type of Fire Extinguisher": getCheckedValues("TypeFireExtinguisher"),

    "Civil Defense Present": radio("Civil Defense"),
    "CAMS Activated": radio("CAMS"),
    "Injury Reported by Occupant": radio("Injury"),

    "Description of the Incident": DescriptionIncident.value,
    "Cause of the Incident": Cause.value,

    "Property Damage": radio("Damage"),
    "Property Damage Specify": SpecifyDamage.value,

    "Action Taken": Actiontaken.value,
    "Other Information": "",

    "Guard Name": GuardName.value,
    "Guard Staff No": StaffNo.value,
    "Company Name": radio("Company"),

    "Inform QR Facilities Staff": radio("InformQR"),
    "Staff Name": QRStafName.value,

    "Meet the Occupant During The Incident": radio("MeetOccupant"),

    "Inform Cabin Crew Housing officer": radio("informCabinCrew"),
    "Housing Officer Visit the Site": radio("housingofficerVisit"),
    "Housing officer Name": HousingOfficerName.value
  };

  fetch(FIRE_SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify(payload)
  })
    .then(r => r.json())
    .then(res => {
      if (res.status === "success") {
        status.innerText = "✅ Submitted Successfully";
        status.style.color = "green";
        form.reset();
        submitBtn.disabled = false;
        setTimeout(() => status.innerText = "", 3000);
      } else {
        status.innerText = "❌ Submission Failed";
        status.style.color = "red";
      }
    })
    .catch(err => {
      status.innerText = "❌ Network Error";
      status.style.color = "red";
    });
});
