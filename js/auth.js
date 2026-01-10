const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzUQL2tzAH48KLrXg5Zpdk_dWCMYrdAIBLFcHraX85E1Z9ZIgX1KQAvhhNTB-__ufWbTQ/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
