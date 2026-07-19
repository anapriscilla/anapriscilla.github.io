const toggle = document.getElementById('themeToggle');
const iconLight = document.getElementById('iconLight');
const iconDark = document.getElementById('iconDark');

function applyTheme(dark) {
  if (dark) {
    document.documentElement.setAttribute('data-theme', 'dark');
    iconLight.style.display = 'block';
    iconDark.style.display = 'none';
  } else {
    document.documentElement.removeAttribute('data-theme');
    iconLight.style.display = 'none';
    iconDark.style.display = 'block';
  }
}

applyTheme(localStorage.getItem('theme-home') !== 'light');

document.getElementById('year').textContent = new Date().getFullYear();

toggle.addEventListener('click', () => {
  const dark = document.documentElement.getAttribute('data-theme') === 'dark';
  localStorage.setItem('theme-home', dark ? 'light' : 'dark');
  applyTheme(!dark);
});

// — limpa tema do portfolio ao navegar para ele, garantindo entrada sempre no escuro —
document.querySelector('.main-card').addEventListener('click', () => {
  localStorage.removeItem('theme-portfolio');
});

// — modal perfil —
const profileModal = document.getElementById('profileModal');
document.querySelector('.logo').addEventListener('click', () => profileModal.classList.add('open'));
document.getElementById('modalClose').addEventListener('click', () => profileModal.classList.remove('open'));
profileModal.addEventListener('click', e => { if (e.target === profileModal) profileModal.classList.remove('open'); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') profileModal.classList.remove('open'); });

// — player de música —
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicToggle');
const iconMusicPlay = document.getElementById('iconMusicPlay');
const iconMusicPause = document.getElementById('iconMusicPause');

function setMusicState(playing) {
  if (playing) {
    musicBtn.classList.add('is-playing');
    iconMusicPlay.style.display = 'none';
    iconMusicPause.style.display = 'block';
  } else {
    musicBtn.classList.remove('is-playing');
    iconMusicPlay.style.display = 'block';
    iconMusicPause.style.display = 'none';
  }
}

function fadeIn(target, duration) {
  music.volume = 0;
  const steps = 30;
  const step = target / steps;
  const interval = duration / steps;
  let v = 0;
  const t = setInterval(() => {
    v = Math.min(v + step, target);
    music.volume = v;
    if (v >= target) clearInterval(t);
  }, interval);
}

musicBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play().then(() => { setMusicState(true); fadeIn(0.06, 1200); });
  } else {
    music.pause();
    setMusicState(false);
  }
});

// — efeito de digitação do "Hello, World!" —
const heroTyped = document.getElementById('heroTyped');
const heroTitle = document.getElementById('heroTitle');
if (heroTyped) {
  const text = '— Hello, World!';
  let i = 0;
  (function typeHero() {
    heroTyped.textContent = text.slice(0, i);
    if (i < text.length) {
      i++;
      setTimeout(typeHero, 65);
    } else if (heroTitle) {
      setTimeout(() => heroTitle.classList.add('show'), 200);
    }
  })();
}