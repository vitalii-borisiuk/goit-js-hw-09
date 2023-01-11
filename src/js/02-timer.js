import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  minDate: Date.now(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};



const refs = {
    startBtn: document.querySelector('[data-start]'),
    timer: document.querySelector('#datetime-picker'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    mins: document.querySelector('[data-minutes]'),
    secs: document.querySelector('[data-seconds]'),
};

const time = flatpickr(refs.timer, options);


refs.startBtn.addEventListener('click', () => timer.start());

const timer = {
    start() {
        // const startTime = Date.now();
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = time.onClose - currentTime;
            const { hours, mins, secs } = convertMs(deltaTime);

            console.log(`${hours}:${mins}:${secs}`);
        }, 1000);
    },
};

timer.start();



function updateTimer({ hours, mins, secs }) {
    refs.timer.textContent = `${hours}:${mins}:${secs}`;
}


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}