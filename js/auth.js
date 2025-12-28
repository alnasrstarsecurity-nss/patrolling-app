const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwkT79skFETMGeyN091WyhKMPfVfTSqnKWqz2HaeuNJ4nX-KWM7ct5yg7rp9aIMIJwzZg/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
