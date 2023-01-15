import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    startBtn: document.querySelector('[data-start]'),
    timer: document.querySelector('#datetime-picker'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    mins: document.querySelector('[data-minutes]'),
    secs: document.querySelector('[data-seconds]'),
};

let selectedDate = null;
let intervalId = null;
refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0].getTime();
    if (selectedDate < Date.now()) {       
      refs.startBtn.disabled = true;
      Notify.failure('Please choose a date in the future.');
    }
    else {
    refs.startBtn.disabled = false;
    };

  },
  
};

flatpickr(refs.timer, options);




let object = {};

const timer = () => {
  intervalId = setInterval(() => {
    const deltaTime = selectedDate - new Date().getTime();
    if (deltaTime <= 1000) {
      clearInterval(intervalId);
    }

    object = convertMs(deltaTime);
    updateClockFace(object);
  }, 1000);
};



function pad(value) {
  return String(value).padStart(2, '0');
}

function updateClockFace({ days, hours, minutes, seconds }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${minutes}`;
  refs.secs.textContent = `${seconds}`;
}


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = pad(Math.floor(ms / day));
    // Remaining hours
    const hours = pad(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
};


refs.startBtn.addEventListener('click', timer);