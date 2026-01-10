const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzauho0Dz0nM-FxpI-DUCHi1MRlEa7k6e_pPHykX9hiDDvfldBSuone8GblixA2nM_-Kg/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
