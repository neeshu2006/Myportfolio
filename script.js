// Fade-in effect on scroll
const cards = document.querySelectorAll('.card');
const options = { threshold: 0.3 };

const fadeIn = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
};

const observer = new IntersectionObserver(fadeIn, options);
cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(20px)';
  observer.observe(card);
});