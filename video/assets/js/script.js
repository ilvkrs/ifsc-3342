const video = document.getElementById('video');
const playBtn = document.getElementById('play-btn');
const progress = document.getElementById('progress');
const progressBar = document.getElementById('progress-bar');

playBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playBtn.textContent = 'Pause';
  } else {
    video.pause();
    playBtn.textContent = 'Play';
  }
});

video.addEventListener('timeupdate', () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.width = percent + '%';
});

progress.addEventListener('click', (e) => {
  const rect = progress.getBoundingClientRect();
  const pos = (e.clientX - rect.left) / rect.width;
  video.currentTime = pos * video.duration;
});

video.addEventListener('ended', () => {
  playBtn.textContent = 'Play';
});
