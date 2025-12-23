const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyHCiWGzfHscTNVy9cBF2YaKtZ7Zlil71Smb8vBZnX-nu1v-jesrTrmdqqU59cD7RTYIw/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
