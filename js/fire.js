
/* ===============================
   CONFIG
================================ */
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyGO6yvbwwxM-RqPxCXU9rkOj4P3sGVGOK-gtr1AHmFuMzex82lAWkyS2bdy2GKRj6dlQ/exec";

const form = document.getElementById("fireForm");
const status = document.getElementById("status");


/* ===============================
    Helper — get radio
================================ */
function radio(name) {
  const r = document.querySelector(`input[name="${name}"]:checked`);
  return r ? r.value : "";
}

form.addEventListener("submit", e => {
  e.preventDefault();

  status.innerText = "Submitting...";
  status.style.color = "blue";

/* ===============================
   FORM SUBMISSION
================================ */
const payload = {
    action: "submitFireReport",

    "Building Name": buildingName.value,
    "Type of Incident": typeIncident.value,
    "Evacuated": radio("evacuated"),
    "Date of Incident": dateIncident.value,
    "Incident Time": incidentTime.value,
    "Panel Reset Time": resetTime.value,
    "Alarm Activated In": alarmActivated.value,
    "Other Area": otherArea.value,
    "Occupant Name": occupantName.value,
    "Occupant Nationality": occupantNationality.value,
    "Floor No": floorNo.value,
    "Flat No": flatNo.value,
    "Staff Number": staffNumber.value,
    "Department": department.value,
    "Room No": roomNo.value,
    "Occupant Was In": occupantWasIn.value,
    "Exhaust Fan": radio("exhaustFan"),
    "Kitchen Cooking Hood": radio("kitchenHood"),
    "Kitchen Door": radio("kitchenDoor"),
    "Fire Blanket Used": radio("fireBlanket"),
    "Fire Extinguisher Used": radio("extinguisherUsed"),
    "Type of Fire Extinguisher": typeExtinguisher.value,
    "Civil Defense Present": radio("civilDefense"),
    "CAMS Activated": radio("camsActivated"),
    "Injury Reported by Occupant": radio("injuryReported"),
    "Description of the Incident": descriptionIncident.value,
    "Cause of the Incident": causeIncident.value,
    "Property Damage": radio("propertyDamage"),
    "Property Damage Specify": propertyDamageSpecify.value,
    "Action Taken": actionTaken.value,
    "Other Information": otherInformation.value,
    "Guard Name": guardName.value,
    "Guard Staff No": guardStaffNo.value,
    "Company Name": companyName.value,
    "Inform QR Facilities Staff": radio("informQR"),
    "Staff Name": staffName.value,
    "Meet the Occupant During The Incident": radio("meetOccupant"),
    "Inform Cabin Crew Housing officer": radio("informHousing"),
    "Housing Officer Visit the Site": radio("housingVisit"),
    "Housing officer Name": housingOfficerName.value
  };



  fetch(SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify(payload)
  })
    .then(r => r.json())
    .then(res => {
      if (res.status === "success") {
        status.innerText = "✅ Submitted Successfully";
        status.style.color = "green";
        form.reset();
        setTimeout(() => status.innerText = "", 3000);
      } else {
        status.innerText = "❌ Submission Failed";
        status.style.color = "red";
      }
    })
    .catch(() => {
      status.innerText = "❌ Network Error";
      status.style.color = "red";
    });
});


/* ===============================
   LOGOUT
================================ */
function logout() {
  localStorage.clear();
  location.href = "index.html";
}
