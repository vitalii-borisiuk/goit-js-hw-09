let intervalId = null;

const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
}
refs.startBtn.addEventListener('click', changeBg);
function changeBg() {
    if (intervalId === null) {
        intervalId = setInterval(() => document.body.style.backgroundColor = getRandomHexColor(), 1000);   
    };
};

refs.stopBtn.addEventListener('click', () => clearInterval(intervalId));

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
