// Scroll Reveal Animation
const revealElements = document.querySelectorAll(
  ".section-label, .about-card, .project-card, .skill-card, .achievement-card, .education-card, .coding-profile-card, .learning-card, .progress-metric, .contact-form-wrapper"
);

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
  revealObserver.observe(element);
});