gsap.from("#page1 span ", {
  scale: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#page1",
  },
});
gsap.from("#page2 span ", {
  scale: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#page2",
    markers: true,
    start: "top 50%",
    end: "top 10%",
    scrub : true,
  },
});
gsap.from("#page3 span ", {
  scale: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#page3",
    markers: true,
    start: "top 50%",
    end: "top 10%",
    scrub : true,
  },
});
gsap.from("#page4 span ", {
  scale: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#page4",
    markers: true,
    start: "top 50%",
    end: "top 10%",
    scrub : true,
  },
});
gsap.from("#page5 span ", {
  scale: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#page5",
    markers: true,
    start: "top 50%",
    end: "top 10%",
    scrub : true,
  },
});
