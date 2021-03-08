const createTimerEl = (num) => {
  const timerDiv = document.createElement("div");
  let counter = 0;
  timerDiv.classList.add("timer", `timer_${num}`);

  timerDiv.innerHTML = `
      <div class="remove"></div>
      <h3>0 <span>00</span></h3>
      <div class="btn">
        <button class="reset">Reset</button>
        <button class="stop">Stop</button>
      </div>
      `;

  const removeBtn = timerDiv.querySelector(".remove");
  const text = timerDiv.querySelector("h3");
  const resetBtn = timerDiv.querySelector(".reset");
  const stopBtn = timerDiv.querySelector(".stop");

  const interval = setInterval(() => {
    const s = Math.floor(counter / 100);
    const ms = counter % 100;
    text.innerHTML = `${s}<span>${ms}</span>`;
    counter++;
  }, 10);

  resetBtn.addEventListener("click", () => {
    counter = 0;
  });

  stopBtn.addEventListener('click', ()=> clearInterval(interval));

  removeBtn.addEventListener("click", () => {
    clearInterval(interval);
    timerDiv.remove();
  });

  return timerDiv;
};

addCounterEl.addEventListener("click", () => {
  const timersQty = document.querySelectorAll(".timer").length;

  if (timersQty < 5) {
    timersCount++;
    const newTimer = createTimerEl(timersCount);
    timersContainerEl.appendChild(newTimer);
  }
});