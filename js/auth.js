const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxlQZH8PwIK_W3lXDzVOrs1eMBpjuB9vvUhN4nrgKVXIIqUoSY-o7SdBzpefR2ZT6DIWg/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
