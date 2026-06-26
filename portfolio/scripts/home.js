// theme toggle
  (function () {
    const html = document.documentElement;
    const btn  = document.getElementById('themeToggle');
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

  // menu toggle
  function toggleMenu(){
    const sb = document.getElementById('sidebar');
    const isOpen = sb.classList.toggle('open');
    sb.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  }

  // placeholder openCase
  function openCase(id){
    // para agora abre alert; na versão seguinte podemos abrir modal ou case.html
     window.location.href = `../pages/page.html`;
  }

  // close sidebar on Esc
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape'){
    const sb = document.getElementById('sidebar');
    if(sb.classList.contains('open')) toggleMenu();
  }});


  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
      }
    });
  });


  document.getElementById("scrollToProjects").addEventListener("click", function() {
    document.querySelector(".projects").scrollIntoView({
      behavior: "smooth"
    });
  });


  document.getElementById("ano").textContent = new Date().getFullYear();

  // Skills boxes staggered reveal
  const skillBoxes = document.querySelectorAll('.skills .inner > div');
  const skillObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, i) {
      if (entry.isIntersecting) {
        setTimeout(function () {
          entry.target.classList.add('skill-reveal');
        }, i * 130);
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  skillBoxes.forEach(function (box) { skillObserver.observe(box); });

  // Scroll reveal nos títulos de seção
  (function () {
    var titleEls = document.querySelectorAll(
      '.section-eyebrow, .section-title, .skills-eyebrow, .skills-title, .contact-eyebrow, .contact-title'
    );
    titleEls.forEach(function (el) { el.classList.add('title-hidden'); });

    var titleObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('title-visible');
          titleObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    titleEls.forEach(function (el) { titleObserver.observe(el); });
  }());

  // Count-up animation nos stats
  (function () {
    function animateCount(el) {
      var target = parseInt(el.getAttribute('data-target'), 10);
      var duration = 1200;
      var start = null;
      function step(ts) {
        if (!start) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(ease * target);
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target;
      }
      requestAnimationFrame(step);
    }

    var countEls = document.querySelectorAll('.count-num');
    var countObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    countEls.forEach(function (el) { countObserver.observe(el); });
  }());

  // UI Design slider autoplay
  (function () {
    var track     = document.querySelector('#uiSlider .card-slides-track');
    var dotsWrap  = document.getElementById('uiDots');
    if (!track || !dotsWrap) return;

    var slides  = track.querySelectorAll('.card-slide');
    var total   = Math.min(slides.length, 3);
    var current = 0;
    var timer;

    if (total <= 1) return;

    // gera dots conforme a quantidade real (máx 3)
    for (var i = 0; i < total; i++) {
      var dot = document.createElement('span');
      dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
      dotsWrap.appendChild(dot);
    }
    dotsWrap.classList.add('visible');

    var dots = dotsWrap.querySelectorAll('.slider-dot');

    function goTo(n) {
      current = (n + total) % total;
      track.style.transform = 'translateX(-' + (current * 100) + '%)';
      dots.forEach(function (d, i) {
        d.classList.toggle('active', i === current);
      });
    }

    dots.forEach(function (d, i) {
      d.addEventListener('click', function (e) {
        e.preventDefault();
        clearInterval(timer);
        goTo(i);
        timer = setInterval(function () { goTo(current + 1); }, 4000);
      });
    });

    timer = setInterval(function () { goTo(current + 1); }, 4000);
  }());

  // Scroll to top
  (function () {
    const btn = document.getElementById('scrollTop');
    window.addEventListener('scroll', function () {
      btn.classList.toggle('visible', window.scrollY > 350);
    });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }());

  // Modal perfil — abre ao clicar no nome da hero
  (function () {
    const overlay = document.getElementById('profileModal');
    const heroName = document.getElementById('heroName');
    const closeBtn = document.getElementById('modalClose');

    heroName.addEventListener('click', () => overlay.classList.add('open'));
    heroName.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') overlay.classList.add('open'); });
    closeBtn.addEventListener('click', () => overlay.classList.remove('open'));
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.remove('open'); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') overlay.classList.remove('open'); });
  }());

  