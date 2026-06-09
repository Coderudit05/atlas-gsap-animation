gsap.from("#text1", {
  scale: 0.2,
  opacity: 0,
  duration: 2,
});
gsap.from("#text2", {
  scale: 0.2,
  x: -500,
  opacity: 0,
  duration: 2,
  // delay : 2,
  scrollTrigger: {
    trigger: "#text2",
    markers: true,
    start: "top 90%",
    end: "top 50%",
    scrub: true,
  },
});
gsap.from("#text3", {
  scale: 0.2,
  x: 500,
  y: 300,
  opacity: 0,
  duration: 2,
  // delay : 4,
  //   scrollTrigger: "#text3",
  scrollTrigger: {
    trigger: "#text3",
    markers: true,
  },
});
gsap.from("#text4", {
  scale: 0.2,
  //   x: -500,
  //   y: 300,
  opacity: 0,
  duration: 2,
  // delay : 6,
  //   scrollTrigger: "#text4",
  scrollTrigger: {
    // trigger: "#text4",
    // markers: true,
  },
});
gsap.from("#text5", {
  x: 500,
  scale: 0.2,
  y: 300,
  opacity: 0,
  duration: 2,
  // delay : 8,
  //   scrollTrigger: "#text5",
  scrollTrigger: {
    // trigger: "#text5",
    // markers: true,
  },
});
