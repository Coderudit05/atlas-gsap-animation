const cursor = document.getElementById("cursor");
const button = document.getElementById("btn");

window.addEventListener("mousemove", (e) => {
  //   console.log(e.clientX, e.clientY);

  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,

    ease: "power2.out",
    duration: 0.5,
  });
});

button.addEventListener("mouseenter", () => {
  cursor.classList.add("scale-cursor");
  // console.log('mouse entered')

  gsap.to(cursor, {
    scale: 2,
    duration: 0.3,
    ease: "power2.out",
  });
});

button.addEventListener("mouseleave", () => {
  cursor.classList.remove("scale-cursor");
  // console.log('mouse leave')
  gsap.to(cursor, {
    scale: 1,
    duration: 0.3,
    ease: "power2.out",
  });
});

gsap.set(cursor, {
  opacity: 0,
});

window.addEventListener("mousemove", () => {
  gsap.to(cursor, {
    opacity: 1,
  });
});
