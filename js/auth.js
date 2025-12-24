const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxELF7oYmYblpYiW_-TH0ZKoZo6krCqhzOxh3aGl-I8eN_xQOnLlSWsaxSsJSyrJRg4zw/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
