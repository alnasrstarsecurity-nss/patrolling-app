const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxPfnB6jfa4kWJbR47hne0vHjZRpiBdozzqIOfNSaAq3d5jITXqpxBkTbksiENd4hxJyA/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
