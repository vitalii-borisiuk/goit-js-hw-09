let intervalId = null;

const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
};


refs.startBtn.addEventListener('click', changeBg);
function changeBg() {
    intervalId = setInterval(() => document.body.style.backgroundColor = getRandomHexColor(), 1000);
    if (intervalId !== null) {
        document.querySelector('button').disabled = true;
    };
};

refs.stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    if (intervalId !== null) {
        document.querySelector('button').disabled = false;
    }
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
