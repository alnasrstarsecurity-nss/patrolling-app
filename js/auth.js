const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzEjjqqGcoVxST12sIJNzZ4zaVKWVatE3SIq1p_mLnU6iGR9dg2r6rWIEqIdT-9NvID7Q/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
