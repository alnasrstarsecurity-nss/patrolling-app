const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw667QNwDQlV9xKPI4PHjQi6lpqwM26VTL83iyg7PrN28sOsbwHuXvTP5erGc9mZjrybQ/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
