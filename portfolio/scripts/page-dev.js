/* Theme toggle */
(function () {
  const html = document.documentElement;
  const btn       = document.getElementById('themeToggle');
  const iconLight = document.getElementById('iconLight');
  const iconDark  = document.getElementById('iconDark');

  function updateIcon(theme) {
    if (theme === 'dark') {
      iconLight.style.display = 'block';
      iconDark.style.display  = 'none';
    } else {
      iconLight.style.display = 'none';
      iconDark.style.display  = 'block';
    }
  }

  updateIcon(html.getAttribute('data-theme') || 'dark');

  btn.addEventListener('click', function () {
    const next = (html.getAttribute('data-theme') || 'dark') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme-portfolio', next);
    updateIcon(next);
  });
}());

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

/* Scroll to top */
(function () {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', function () {
    btn.classList.toggle('visible', window.scrollY > 350);
  });
  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}());
