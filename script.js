const music = document.getElementById('background-music');
const toggleButton = document.getElementById('toggle-music');

let isPlaying = false;

toggleButton.addEventListener('click', () => {
    if (isPlaying) {
        music.pause();
        toggleButton.textContent = "Включити музику";
    } else {
        music.play();
        toggleButton.textContent = "Вимкнути музику";
    }
    isPlaying = !isPlaying;
});
