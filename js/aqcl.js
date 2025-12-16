const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbydAeCCsW7MGoa0zur8Uawu3ivJG-jpB4Le6HDaGEqxzLEEL1znrEhIpmT-4_EGIRpqRA/exec";


const form = document.getElementById("aqclForm");
const status = document.getElementById("status");

/* ---------- RADIO HELPER ---------- */
function radio(name) {
  const r = document.querySelector(`input[name="${name}"]:checked`);
  return r ? r.value : "";
}

/* ---------- SIGNATURE ---------- */
const canvas = document.getElementById("sign");
const ctx = canvas.getContext("2d");
ctx.lineWidth = 2.5;
ctx.lineCap = "round";

let drawing = false;

function resizeCanvas() {
  const r = canvas.getBoundingClientRect();
  canvas.width = r.width;
  canvas.height = r.height;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function pos(e) {
  const r = canvas.getBoundingClientRect();
  if (e.touches) {
    return {
      x: e.touches[0].clientX - r.left,
      y: e.touches[0].clientY - r.top
    };
  }
  return { x: e.offsetX, y: e.offsetY };
}

function start(e) {
  e.preventDefault();
  drawing = true;
  const p = pos(e);
  ctx.beginPath();
  ctx.moveTo(p.x, p.y);
}

function move(e) {
  if (!drawing) return;
  e.preventDefault();
  const p = pos(e);
  ctx.lineTo(p.x, p.y);
  ctx.stroke();
}

function end(e) {
  e.preventDefault();
  drawing = false;
}

canvas.addEventListener("mousedown", start);
canvas.addEventListener("mousemove", move);
canvas.addEventListener("mouseup", end);
canvas.addEventListener("mouseleave", end);

canvas.addEventListener("touchstart", start, { passive: false });
canvas.addEventListener("touchmove", move, { passive: false });
canvas.addEventListener("touchend", end);

function clearSignature() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

/* ---------- SUBMIT ---------- */
form.addEventListener("submit", e => {
  e.preventDefault();

  status.innerText = "Submitting...";
  status.style.color = "blue";

  const payload = {
    action: "aqcl",
    user: localStorage.getItem("user"),
    accName: accName.value,
    guardPosition: radio("guardPosition"),
    guard1cag: `Comm:${radio("g1_comm")} | Aware:${radio("g1_aware")} | Groom:${radio("g1_groom")}`,
    signature: canvas.toDataURL()
  };

  fetch(SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify(payload)
  })
  .then(r => r.json())
  .then(res => {
    if (res.status === "success") {
      status.innerText = "✅ Submitted successfully";
      status.style.color = "green";

      form.reset();
      clearSignature();

      setTimeout(() => status.innerText = "", 3000);
    } else {
      status.innerText = "❌ Submission failed";
      status.style.color = "red";
    }
  })
  .catch(() => {
    status.innerText = "❌ Network error";
    status.style.color = "red";
  });
});
