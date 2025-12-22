const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyeMaRFMCO6AlTFwpGix_Pq4w6EQQfCm_TjLErgqwdaSQj29PuxTymAAULYVzhjX9efQg/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
