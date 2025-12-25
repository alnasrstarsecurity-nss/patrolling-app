const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyPCls7b2260pWxyyt_05O68TFD-PcUyu17S4Mxb52DuGUwlY1cchEoLVS9AeDd-nybgw/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
