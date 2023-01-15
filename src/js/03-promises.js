import { Notify } from 'notiflix/build/notiflix-notify-aio';


const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  };

refs.form.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
  event.preventDefault();
  const formDelay = Number(`${refs.delay.value}`);
  const formStep = Number(`${refs.step.value}`);
  const formAmount = Number(`${refs.amount.value}`);

  let currentDelay = formDelay;
  for (let i = 0; i < formAmount; i += 1){
       createPromise(i + 1, currentDelay).then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    currentDelay += formStep;
  };  
  event.currentTarget.reset();
};

function createPromise(position, delay) {
return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      }
      else {
        reject({ position, delay });
      };
    }, delay);
  }); 
};