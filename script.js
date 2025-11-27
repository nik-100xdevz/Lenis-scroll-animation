// Initialize Lenis
const lenis = new Lenis({
     infinite:true
    });

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);