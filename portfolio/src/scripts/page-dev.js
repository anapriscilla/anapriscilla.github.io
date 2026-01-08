/* Scroll animations */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      // Animações existentes
      if (entry.target.classList.contains('scroll-fade')) {
        entry.target.classList.add('visible');
      }

      // Número / novas animações
      if (entry.target.classList.contains('animate')) {
        entry.target.classList.add('is-visible');
      }

      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

/* Observa ambos */
document
  .querySelectorAll('.scroll-fade, .animate')
  .forEach(el => observer.observe(el));

/* Scroll suave */
function scrollToID(id) {
  document
    .getElementById(id)
    .scrollIntoView({ behavior: 'smooth' });
}
