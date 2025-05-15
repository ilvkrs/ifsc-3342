const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const progress = document.getElementById('progress');
const progressBar = document.getElementById('progress-bar');

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = 'Pause';
  } else {
    audio.pause();
    playBtn.textContent = 'Play';
  }
});

audio.addEventListener('timeupdate', () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = percent + '%';
});

progress.addEventListener('click', (e) => {
  const rect = progress.getBoundingClientRect();
  const pos = (e.clientX - rect.left) / rect.width;
  audio.currentTime = pos * audio.duration;
});

audio.addEventListener('ended', () => {
  playBtn.textContent = 'Play';
});
