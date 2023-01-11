import { Report } from 'notiflix/build/notiflix-report-aio';
// import "notiflix-3.2.5.min.css";


const refs = {
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  position: document.querySelector('input[name="amount"]'),
  btn: document.querySelector('button'),
};

refs.btn.addEventListener('click', createPromise);
function createPromise() {
  return new Promise.all  (({ position, delay }) => {
    const shouldResolve = Math.random() > 0.3;
    if (resolve) {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } 
    else {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    }

  }
   
 )
}
createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });