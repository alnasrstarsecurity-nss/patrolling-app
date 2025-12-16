const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbydAeCCsW7MGoa0zur8Uawu3ivJG-jpB4Le6HDaGEqxzLEEL1znrEhIpmT-4_EGIRpqRA/exec";

document.getElementById("aqclForm").addEventListener("submit", submitAQCL);

function yn(id) {
  return document.getElementById(id).checked ? "YES" : "NO";
}

function submitAQCL(e) {
  e.preventDefault();

  document.getElementById("status").innerText = "Submitting...";

  const data = {
    action: "aqcl",
    username: localStorage.user,
    password: localStorage.pass,

    accommodation: accName.value,
    guardPosition: yn("guardPosition"),
    numGuards: numGuards.value,
    guardAppearance: guardAppearance.value,
    deskAppearance: deskAppearance.value,
    guardContact: guardContact.value,
    walkPatrol: yn("walkPatrol"),
    patrolEffective: yn("patrolEffective"),
    changesMade: changesMade.value,
    qrCheck: yn("qrCheck"),
    lastVisit: lastVisit.value,
    supervisorName: supervisorName.value,
    supervisors7: supervisors7.value,
    keyCabinet: yn("keyCabinet"),
    keyLog: yn("keyLog"),
    keysAudited: keysAudited.value,
    camerasWorking: yn("camerasWorking"),
    numCameras: numCameras.value,
    acs: acs.value,
    perimeter: perimeter.value,
    apartmentInspection: apartmentInspection.value,
    apartmentRemark: apartmentRemark.value,
    actionsTaken: actionsTaken.value,
    guard1cag: guard1cag.value,
    guard2cag: guard2cag.value,
    patrollingSupervisor: patrollingSupervisor.value,
    serial: serial.value,
    buildingSecurity: buildingSecurity.value,
    securityStaffNumber: securityStaffNumber.value,
    landline: landline.value,
    dutyMobile: dutyMobile.value,
    signature: sign.toDataURL()
  };

  fetch(SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(r => r.json())
  .then(res => {
    if (res.status === "success") {
      status.innerText = "✅ Submitted Successfully";
      document.getElementById("aqclForm").reset();
      clearSign();
      setTimeout(() => status.innerText = "", 2000);
    } else {
      status.innerText = "❌ " + res.message;
    }
  })
  .catch(() => status.innerText = "❌ Network error");
}
