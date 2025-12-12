  // fade in up
  gsap.utils.toArray(".fade-up").forEach(el => {
    gsap.from(el, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });

   // fade in down
  gsap.utils.toArray(".fade-down").forEach(el => {
    gsap.from(el, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // fade in left
  gsap.utils.toArray(".fade-left").forEach(el => {
    gsap.from(el, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // fade in right
  gsap.utils.toArray(".fade-right").forEach(el => {
    gsap.from(el, {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });