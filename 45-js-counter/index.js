let step = 0;
let counter = 0;

/**
 * Exercise 1
 *
 * create a function {action} which will take a {symbol} param: "+" or "-".
 * increment {counter} by {step} if you pass "+", or
 * decrement {counter} by {step} if you pass "-"
 *
 * NOTE: ".counter_value" should always represent the current value of {counter}
 */
const action = (symbol) => {
  const counterVal = document.querySelector('.counter_value')

  if (symbol == '+') {
    counter = (counter + step);
    counterVal.innerText = parseInt(counter);
    return counter;

  } else if (symbol == '-') {
    counter = (counter - step);
    counterVal.innerText = parseInt(counter);
    return counter;
  }


  
}
/**
 * Exercise 2
 *
 * When the user clicks on "Set step" button, you need to:
 * 1. set {step} to the current value of input.
 * 2. reset value of input field to 1
 * 3. update value of ".step_value" to value of {step}
 *
 * NOTE: {step} should be an integer
 *
 */
const setStepButton = document.querySelector('.step_form');
let stepInput = document.querySelector('.step_form input');

setStepButton.addEventListener("submit",(event) => {
  event.preventDefault();
  step = parseInt(stepInput.value);
  document.querySelector('.inc .step_value').innerText = step;
  stepInput.value = 1;

})
/**
 * Exercise 3
 *
 * handle click on "#decrement" button and
 * decrement counter by {step}
 *
 * NOTE: remember to use your {action} function
 */
const decBtn = document.querySelector('#decrement');

decBtn.addEventListener("click", ()=> {
  action("-");
})
/**
 * Exercise 4
 *
 * handle click on "#increment" button and
 * increment counter by {step}
 *
 * NOTE: remember to use your {action} function
 */
 const incBtn = document.querySelector('#increment');

 incBtn.addEventListener("click", ()=> {
   action("+");
 })
/**
 * Exercise 5
 *
 * when the user clicks on "#auto_decrement",
 * {counter} should be decremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */
 let interlID;

const autoDec = document.querySelector("#auto_decrement");

autoDec.addEventListener("click", ()=> {
  interID =
  setInterval(() => {
    action("-");
    console.log(typeof counter + counter);
  }, 1000);
})
/**
 * Exercise 6
 *
 * when the user clicks on "#auto_increment",
 * {counter} should be incremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */
 const autoInc = document.querySelector("#auto_increment");
 autoInc.addEventListener("click", ()=> {
    interID =
   setInterval(() => {
     action("+");
     console.log(typeof counter + counter);
   }, 1000);
 })
/**
 * Exercise 7
 *
 * when the user clicks on "#stop_auto",
 * the auto counter should stop
 */
const stopBtn = document.querySelector('#stop_auto');
stopBtn.addEventListener("click",() => {
  clearInterval(interID);
  
})
