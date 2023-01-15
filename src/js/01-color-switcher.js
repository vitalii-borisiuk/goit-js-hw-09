let intervalId = null;

const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
};
        refs.stopBtn.disabled = true;

refs.startBtn.addEventListener('click', changeBg);
function changeBg() {
    intervalId = setInterval(() => document.body.style.backgroundColor = getRandomHexColor(), 1000);
    if (intervalId !== null) {
        refs.startBtn.disabled = true;
        refs.stopBtn.disabled = false;
    };
};

refs.stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    if (intervalId !== null) {
        refs.startBtn.disabled = false;
        refs.stopBtn.disabled = true;

    }
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
