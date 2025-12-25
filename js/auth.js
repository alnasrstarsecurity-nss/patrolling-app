const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw-O7m5PVZyWv62fxx7j9jnjKicd7kQUUSyVH5R2OH9Z5YpWPoYnEdpNJdnadsOFCsI_g/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
