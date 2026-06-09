// ============================================
// ELEMENTS
// ============================================
const string1 = document.querySelector("#string1");
const string2 = document.querySelector("#string2");
const path1 = document.querySelector("#string1 svg path");
const path2 = document.querySelector("#string2 svg path");
const text = document.querySelector("#middle-text h1");

const restPath1 = "M 10 60 Q 500 60 990 60";
const restPath2 = "M 10 60 Q 500 60 990 60";

// ============================================
// PAGE LOAD ENTRANCE ANIMATION
// Timeline sequences everything cleanly.
// Nothing plays at the same time unless
// we explicitly want it to.
// ============================================
const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

// Start both paths invisible — drawn from center
tl.from(path1, {
  attr: { d: "M 10 60 Q 500 60 500 60" },
  duration: 1.2,
  opacity: 0,
})
  .from(
    text,
    {
      opacity: 0,
      y: 20,
      duration: 0.8,
    },
    "-=0.6",
  ) // starts 0.6s before previous animation ends
  .from(
    path2,
    {
      attr: { d: "M 500 60 Q 500 60 990 60" },
      duration: 1.2,
      opacity: 0,
    },
    "-=0.8",
  ); // overlaps with text animation

// ============================================
// STRING 1 INTERACTION
// ============================================
string1.addEventListener("mousemove", function (e) {
  const rect = string1.getBoundingClientRect();

  // Convert screen pixels to SVG viewBox coordinates
  const svgX = (e.offsetX / rect.width) * 1000;
  const svgY = (e.offsetY / rect.height) * 120;

  gsap.to(path1, {
    attr: { d: `M 10 60 Q ${svgX} ${svgY} 990 60` },
    duration: 0.2,
    ease: "power3.out",
  });

  // Glow effect — string turns violet on hover
  gsap.to(path1, {
    attr: { stroke: "#a855f7" },
    duration: 0.2,
  });
});

string1.addEventListener("mouseleave", function () {
  // Elastic snap back
  gsap.to(path1, {
    attr: { d: restPath1 },
    duration: 1.5,
    ease: "elastic.out(1, 0.2)",
  });

  // Reset stroke color
  gsap.to(path1, {
    attr: { stroke: "white" },
    duration: 0.6,
    ease: "power2.out",
  });
});

// ============================================
// STRING 2 INTERACTION
// ============================================
string2.addEventListener("mousemove", function (e) {
  const rect = string2.getBoundingClientRect();

  const svgX = (e.offsetX / rect.width) * 1000;
  const svgY = (e.offsetY / rect.height) * 120;

  gsap.to(path2, {
    attr: { d: `M 10 60 Q ${svgX} ${svgY} 990 60` },
    duration: 0.2,
    ease: "power3.out",
  });

  // Glow — string turns pink on hover
  // Different color from string1 — intentional
  // Makes each string feel like its own element
  gsap.to(path2, {
    attr: { stroke: "#ec4899" },
    duration: 0.2,
  });
});

string2.addEventListener("mouseleave", function () {
  gsap.to(path2, {
    attr: { d: restPath2 },
    duration: 1.5,
    ease: "elastic.out(1, 0.2)",
  });

  gsap.to(path2, {
    attr: { stroke: "white" },
    duration: 0.6,
    ease: "power2.out",
  });
});
