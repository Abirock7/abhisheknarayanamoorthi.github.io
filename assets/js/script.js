// fade-in animation for cards
document.querySelectorAll(".project-card, .skill-card").forEach((el, i) => {
  el.style.opacity = 0;
  setTimeout(() => {
    el.style.transition = "opacity 0.8s ease";
    el.style.opacity = 1;
  }, i * 150);
});
