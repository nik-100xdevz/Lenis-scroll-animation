const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".elem").forEach((elem) => {
  const image = elem.querySelector("img");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: elem,
      start: "top bottom",
      end: "bottom top",
      scrub: 1.5,
    }
  });

  const randomX = gsap.utils.random(-120, 120);
  const randomRot = gsap.utils.random(-15, 15);
  const randomZ = gsap.utils.random(-150, -300);

  tl.set(elem, {
    transformPerspective: 800,
    transformStyle: "preserve-3d",
  });

  tl.to(elem, {
    xPercent: randomX,
    rotateZ: randomRot,
    rotateX: gsap.utils.random(-10, 10),
    z: randomZ,
    ease: "expo.out",
  }, 0);

  tl.to(image, {
    scale: 0.3,
    opacity: 0,
    rotateZ: -randomRot,
    filter: "blur(px)",
    ease: "power2.out",
  }, 0);
});
