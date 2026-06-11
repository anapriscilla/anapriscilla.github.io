const toggle = document.getElementById('themeToggle');
const iconLight = document.getElementById('iconLight');
const iconDark = document.getElementById('iconDark');

function applyTheme(dark) {
  if (dark) {
    document.documentElement.setAttribute('data-theme', 'dark');
    iconLight.style.display = 'none';
    iconDark.style.display = 'block';
  } else {
    document.documentElement.removeAttribute('data-theme');
    iconLight.style.display = 'block';
    iconDark.style.display = 'none';
  }
}

applyTheme(localStorage.getItem('theme-home') === 'dark');

document.getElementById('year').textContent = new Date().getFullYear();

toggle.addEventListener('click', () => {
  const dark = document.documentElement.getAttribute('data-theme') === 'dark';
  localStorage.setItem('theme-home', dark ? 'light' : 'dark');
  applyTheme(!dark);
});

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

let userPaused = false;

function tryPlay() {
  music.play()
    .then(() => { setMusicState(true); fadeIn(0.35, 2000); })
    .catch(() => {
      setMusicState(false);
      const startOnInteraction = () => {
        if (userPaused) return;
        music.play().then(() => { setMusicState(true); fadeIn(0.35, 1500); });
        document.removeEventListener('click', startOnInteraction);
        document.removeEventListener('touchstart', startOnInteraction);
      };
      document.addEventListener('click', startOnInteraction);
      document.addEventListener('touchstart', startOnInteraction);
    });
}

tryPlay();

musicBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  if (music.paused) {
    userPaused = false;
    music.play().then(() => { setMusicState(true); fadeIn(0.35, 1200); });
  } else {
    userPaused = true;
    music.pause();
    setMusicState(false);
  }
});