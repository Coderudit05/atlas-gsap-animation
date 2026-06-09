gsap.registerPlugin(ScrollTrigger);

gsap.to("#page1 h1", {
  x: "-55%",
  scrollTrigger: {
    trigger: "#page1",
    // markers: true,
    start: "top top",
    end: "top -150%",
    scrub: 2,
    pin: true,
  },
});
