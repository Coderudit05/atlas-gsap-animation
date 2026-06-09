const tl = gsap.timeline();

tl.from("#logo", {
  y: -200,
  duration: 0.5,
  //   delay: 0.5,
});

tl.from("nav a", {
  y: -200,
  duration: 0.5,
  stagger: 0.1,

  //   delay: 0.8,
});

tl.from("#nav-btn", {
  y: -200,
  duration: 0.5,
  //   delay: 1,
});

tl.from("#text1", {
  y: 200,
  duration: 0.8,
});
tl.from("#text2", {
  y: 200,
  duration: 0.5,
});
tl.from("#text3", {
  y: 200,
  duration: 0.5,
});
