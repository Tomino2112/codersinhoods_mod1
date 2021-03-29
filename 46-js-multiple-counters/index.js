const addCounterEl = document.querySelector("#new_timer");
const timersContainerEl = document.querySelector(".timers");

// USE THIS VARIABLE TO COUNT TIMERS
let timersCount = 0;

/**
 * Exercise 1
 *
 * create a function {createTimerEl} which takes a number
 * and creates a div which matches the HTML structure you can find
 * in the README
 *
 * NOTE: each timer should have additional class with unique number(as you
 * can see in example - timer_$)
 */

const createTimerEl=(num)=>{
  const timerDiv = document.createElement("div");
  let counter = 0;
  console.log(counter)
  timerDiv.classList.add('timer', `timer_${num}`);
  timerDiv.innerHTML = `
    <div class="remove"></div>
  <h3>0 <span>00</span></h3>
  <div class="btn">
    <button class="reset">Reset</button>
    <button class="stop">Stop</button>
  </div>
  `;

const removeBtn = timerDiv.querySelector('.remove');
const timerText = timerDiv.querySelector('h3');
const resetBtn = timerDiv.querySelector('.reset');
const stopBtn = timerDiv.querySelector('.stop');



const interval = setInterval(() => {
  const s = Math.floor(counter /100);
  const ms = counter % 100;
  console.log(counter);
  timerText.innerHTML = `${s}<span>${ms}</span>`;
  counter++;
}, 10);


removeBtn.addEventListener("click", ()=>{
  clearInterval(interval);
  timerDiv.remove();
  
})
resetBtn.addEventListener("click", ()=> counter = 0);

stopBtn.addEventListener("click", ()=>  clearInterval(interval));

return timerDiv;

}

addCounterEl.addEventListener("click", ()=>{
  const timersQty = document.querySelectorAll(".timer").length

  if(timersQty <5){
    timersCount++;
    const newTimer = createTimerEl(timersCount);
    timersContainerEl.appendChild(newTimer); 

  }
  
  

})

// const createTimerEl = (num) => {
//   ///Change AddTimerButton state

//   timersCount = num - 1;
//   const timerDiv = document.createElement("div");
//   timerDiv.classList.add("timer", "timer_" + (timersCount + 1));
//   timersCount = timersCount + 1;

//   timerDiv.innerHTML = `
//       <div class="remove"></div>
//       <h3>0 <span>00</span></h3>
//       <div class="btn">
//         <button class="reset">Reset</button>
//         <button class="stop">Stop</button>
//       </div>
//       `;
//   // //just to test start
//   // const timerNumber = document.createElement("div");
//   // timerNumber.classList.add('number');
//   // timerDiv.appendChild(timerNumber);
//   // timerNumber.innerText = timersCount;
//   // ///just to test end

//   //Remove Button
//   const remove = document.createElement("div");
//   remove.classList.add("remove");

//   timerDiv.appendChild(remove);
//   remove.addEventListener("click", () => {
//     timersCount = timersCount - 1;
//     timerDiv.remove();
//     if (timersCount > 4) {
//       addCounterEl.disabled = true;
//     } else {
//       addCounterEl.disabled = false;
//     }
//   });

//   //Timer Values
//   const timerOuter = document.createElement("h3");
//   const timerInner = document.createElement("span");
//   timerOuter.innerText = 0;
//   timerInner.innerText = 0;
//   timerOuter.appendChild(timerInner);
//   timerDiv.appendChild(timerOuter);

//   //buttons
//   const buttonWrap = document.createElement("div");
//   const resetButton = document.createElement("button");
//   const stopButton = document.createElement("button");
//   buttonWrap.classList.add("btn");
//   resetButton.classList.add("reset");
//   resetButton.innerText = "Reset";
//   stopButton.classList.add("stop");
//   stopButton.innerText = "stop";
//   buttonWrap.appendChild(resetButton);
//   buttonWrap.appendChild(stopButton);
//   timerDiv.appendChild(buttonWrap);

//   let watchInterval;
//   let seconds = 0;
//   let miliSeconds = 0;
//   const startSeconds = () => {
//     timerOuter.innerText = seconds++;
//     timerInner.innerText = miliSeconds++;
//   };
//   watchInterval = setInterval(() => {
//     startTimer();
//   }, 1000);

//   const clearUp = () => {
//     clearInterval(watchInterval);
//     timerOuter.innerText = 0;
//     timerInner.innerText = 0;
//   };
//   const stopWatch = () => {
//     clearInterval(watchInterval);
//   };

//   resetButton.addEventListener("click", () => clearUp());
//   stopButton.addEventListener("click", () => stopWatch());

//   timersContainerEl.appendChild(timerDiv);
// };

// addCounterEl.addEventListener("click", () => {
//   createTimerEl();
//   if (timersCount > 4) {
//     addCounterEl.disabled = true;
//   } else {
//     addCounterEl.disabled = false;
//   }
// });
