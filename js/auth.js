const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxbeFLw4zQzij9QEhYTmk8JruXy6LlD5lrFTWqwo613mqR54NrBfDbnorPVWTIfaMbYaw/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
