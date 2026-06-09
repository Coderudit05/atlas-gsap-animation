gsap.registerPlugin(ScrollTrigger);

gsap.from("#page1 h1", {
  opacity: 0,
  duration: 3,
  y: 200,
});

gsap.to("#page1 h1", {
  x: "-45%",
  scrollTrigger: {
    trigger: "#page1",
    markers: true,
    scrub: 2,
    start: "top top",
    pin: true,

    end: "top -150%",
  },
});
