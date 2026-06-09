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
  const tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#platform",
        start: "top 50%",
      },
    })
    .from("#platform h3", {
      y: 100,
      duration: 0.5,
      opacity: 0,
    })
    .from(
      "#platform #stars span",
      {
        y: 100,
        duration: 0.5,
        opacity: 0,
        stagger: 0.2,
      },
      "0.5",
    )
    .from(
      "#platform .space-y-8 p",
      {
        y: 100,
        duration: 0.5,
        opacity: 0,
        stagger: 0.2,
      },
      "-=0.5",
    )
    .from("#platform-btns a", {
      y: 100,
      duration: 0.5,
      opacity: 0,
      stagger: 0.2,
    });

  gsap.to("#platform img", {
    y: -250,
    ease: "none",
    scrollTrigger: {
      trigger: "#platform",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  });
}

function initMarquee() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#marquee-section",
      // markers: true,

      start: "top top",
      end: "+=3000",
      scrub: 1,
      pin: true,
    },
  });

  tl.fromTo(
    "#marquee-text",
    {
      x: window.innerWidth,
    },
    {
      x: () => -document.getElementById("marquee-text").offsetWidth,
    },
  );
}

function initPortfolio() {
  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
    scrollTrigger: {
      trigger: "#portfolio",
      start: "top 50%",
      // markers: true,
    },
  });

  tl.from("#portfolio h3", {
    y: 60,
    opacity: 0,
    duration: 0.8,
  }).from(
    "#portfolio #para",
    {
      y: 40,
      duration: 0.8,
      opacity: 0,
    },
    "-=0.5",
  );

  const tl2 = gsap.timeline({
    defaults: { ease: "power3.out" },
    scrollTrigger: {
      trigger: "#portfolio-grid",
      start: "top 50%",
      markers: true,
      start: "top 70%",
    },
  });

  tl2.from("#portfolio-grid article", {
    y: 100,
    delay: 0.3,
    duration: 1,
    opacity: 0,
    stagger: 0.4,
  });
}

function initFooter() {
  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
    scrollTrigger: {
      trigger: "#footer",
      start: "top 70%",
      markers: true,
    },
  });

  tl.from("footer .grid > div", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger : 0.2,

  });
}

headerAnime();

heroAnime();

initTrustedPartner();

initPlatform();

initMarquee();

initPortfolio();

initFooter();
