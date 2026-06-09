gsap.registerPlugin(ScrollTrigger);

function headerAnime() {
  const tl = gsap.timeline();

  tl.from("#logo", {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    ease: "back.out(1.7)",
  })
    .from(
      "nav a",
      {
        y: -30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.3",
    )
    .from(
      "#nav-btn",
      {
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        ease: "back.out(2)",
      },
      "-=0.4",
    );
}

function heroAnime() {
  const tl = gsap.timeline({
    defaults: {
      ease: "power2.out",
    },
  });

  tl.from("#left p.text-3xl", {
    y: 40,
    opacity: 0,
    duration: 0.5,
  });

  tl.from(
    "#left h2",
    {
      y: 50,
      opacity: 0,
      duration: 0.5,
    },
    "-=0.3",
  );

  tl.from(
    "#hero-cta",
    {
      y: 50,
      opacity: 0,
      duration: 0.5,
    },
    "-=0.3",
  );

  tl.from(
    "#right img",
    {
      x: 100,
      opacity: 0,
      duration: 1,
    },
    "-=0.5",
  );
}

function initTrustedPartner() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#trusted-partner",
      // markers: true,
      start: "top 50%",
    },
  });

  tl.from("#trusted-partner h3", {
    y: 100,
    opacity: 0,
    duration: 0.8,
  });
  tl.from(
    "#trusted-partner #tp-intro",
    {
      y: 100,
      opacity: 0,
      duration: 0.8,
    },
    "-=0.5",
  );

  tl.from("#boxes > div", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.25,
  });
}

function initPlatform() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#platform",
      markers: true,
      start: "top 50%",
    },
  });

  tl.from("#platform h3", {
    y: 100,
    duration: 0.5,
    opacity: 0,
  });
  tl.from(
    "#platform #stars span",
    {
      y: 100,
      duration: 0.5,
      opacity: 0,
      stagger: 0.2,
    },
    "0.5",
  );
  tl.from(
    "#platform .space-y-8 p",
    {
      y: 100,
      duration: 0.5,
      opacity: 0,
      stagger: 0.2,
    },
    "-=0.5",
  );

  tl.from("#platform-btns a", {
    y: 100,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2,
  });
}

headerAnime();

heroAnime();

initTrustedPartner();

initPlatform();
