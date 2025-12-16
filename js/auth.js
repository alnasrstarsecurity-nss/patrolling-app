const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyIlwMaR48INQ76VfSv35WKys-2-Cjb7VcOk-8J703jJasZZ-OkeUscNeWzspm4K9M6UA/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
