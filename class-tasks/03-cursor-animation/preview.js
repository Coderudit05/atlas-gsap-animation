const cursor = document.getElementById("cursor");
const button = document.getElementById("button");

// Move cursor
window.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.4,
    ease: "power2.out",
  });
});

// Scale up on hover
button.addEventListener("mouseenter", () => {
  cursor.classList.add("scale-cursor");
  gsap.to(cursor, {
    scale: 2,
    duration: 0.3,
    ease: "power2.out",
  });
});

// Reset on leave
button.addEventListener("mouseleave", () => {
  cursor.classList.remove("scale-cursor");
  gsap.to(cursor, {
    scale: 1,
    duration: 0.3,
    ease: "power2.out",
  });
});

// Hide on load
gsap.set(cursor, { opacity: 0 });

// Fade in on first move
window.addEventListener(
  "mousemove",
  function () {
    gsap.to(cursor, { opacity: 1, duration: 0.3 });
  },
  { once: true },
);

// Hide when mouse leaves window
document.addEventListener("mouseleave", () => {
  gsap.to(cursor, { opacity: 0, duration: 0.3 });
});

// Show when mouse enters window
document.addEventListener("mouseenter", () => {
  gsap.to(cursor, { opacity: 1, duration: 0.3 });
});
