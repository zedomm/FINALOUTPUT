// Scroll reveal animation (replays on scroll up and down)
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementBottom = reveals[i].getBoundingClientRect().bottom;
    const revealPoint = 120; // how early animation starts

    // Add animation when element is in view
    if (elementTop < windowHeight - revealPoint && elementBottom > 0) {
      reveals[i].classList.add("active");
    } 
    // Remove animation when element leaves view (so it can replay)
    else {
      reveals[i].classList.remove("active");
    }
  }
}
