const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw5IO2SGmEV2kjfiM-tScS7uofxeEMiy-YgC9tzpBLRlgOPS6NrvODZDJUskVQptcKFpA/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
