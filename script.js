document.addEventListener('DOMContentLoaded', () => {
  const audioBtn = document.getElementById('audio-btn');
  const audio = document.getElementById('audio');

  audioBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      audioBtn.textContent = 'Detener música';
    } else {
      audio.pause();
      audioBtn.textContent = 'Reproducir música';
    }
  });
});
