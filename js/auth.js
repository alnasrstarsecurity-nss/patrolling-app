const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyJUaaqzTlsgZ9MGHTkCpcPztC-gBfa6fqXbH4sfZBvb2WAtbPAZqID929SpeQEwp479Q/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
