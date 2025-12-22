const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxo0juNCqbu-1WewP0pdAxEjX4r0IPdvzmAb2Rbtk399KiRR8aE7dpHd-nrawc4OFllQg/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
