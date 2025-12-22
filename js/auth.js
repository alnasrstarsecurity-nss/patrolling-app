const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwPEkqdIU-yvKtyyzQWeZ6oUG3a8KRMxWIeYP6cA9NgS9MEUgcvEibSkG_q6vtETDCWVg/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
