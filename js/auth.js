const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwDzSXgZER1DM-KJZl1YQTR6JbeD2Yk7s0DsQO5t7Kfx1Oo68hV0zDMvZOISKcBgv28rA/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
