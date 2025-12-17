const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbySz_zEmHWGqIzSltcYVynF6AG3Tjtlf6PGOeHMBiMJrY1TbSob9VusrNYgWyigFERDEg/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
