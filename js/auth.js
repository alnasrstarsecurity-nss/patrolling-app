const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwIHMXTMlH3QfG4SlOqdglWftqPtElhnWps1wIhMYwS77bOHOt9SJf0-N-1bcK2QWpTDw/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
