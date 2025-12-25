const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzH6ptt43Fv26IDmKdE3lClFy8OMc2zj-u0JJhFKOpMcTEZLuEwKP5ydth_yJMQ82VnjA/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
