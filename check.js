/* Vui Thì Code */
document.onkeydown = function(e) {
  if (
    e.key === "F12" || 
    (e.ctrlKey && e.shiftKey && e.key === "I") ||
    (e.ctrlKey && e.shiftKey && e.key === "J") ||
    (e.ctrlKey && e.key === "U") ||
    (e.ctrlKey && e.key === "S")
  ) {
    e.preventDefault();
   window.location.href = "404.html";
    return false;
  }
};

document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
  window.location.href = "404.html";
});

document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
  window.location.href = "404.html";
});

document.addEventListener("keydown", function(e) {
  if ((e.ctrlKey && e.key === "c") || (e.ctrlKey && e.key === "u")) {
    e.preventDefault();
    window.location.href = "404.html";
  }
});

document.addEventListener("copy", function(e) {
  e.preventDefault();
  window.location.href = "404.html";
})

document.querySelectorAll('img').forEach(img => {
  img.addEventListener('contextmenu', e => e.preventDefault());
  img.addEventListener('mousedown', e => e.preventDefault());
  img.addEventListener('touchstart', e => e.preventDefault());
  /* window.location.href = "404.html"; */
});

let isFocused = true;

window.addEventListener("blur", () => {
  isFocused = false;
});

window.addEventListener("focus", () => {
  isFocused = true;
});

document.addEventListener("keydown", (e) => {
  if (isFocused && e.key === "F12") {
    e.preventDefault();
    window.location.href = "404.html";
  }
});