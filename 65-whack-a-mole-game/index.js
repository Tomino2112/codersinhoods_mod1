
const holes = document.querySelectorAll('.hole')
const moles = document.querySelectorAll('.mole')
const start = document.querySelector('.start');
const score = document.querySelector('.score')
let scoreTally = 0;
let lastHole;
let timeUp = false;

const randomTime =(min,max)=>{
 return Math.floor(Math.random()* (max-min)+ min);
}

const randomHole = (holes) => {
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];
  if(hole === lastHole){
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

const init = () =>{
  scoreTally =0;
  holes.forEach(hole =>{

    const demo = setInterval(() => {
      hole.classList.toggle('up');
    }, randomTime(500,2000));

    start.addEventListener('mouseover',()=>{
      clearInterval(demo);
      hole.classList.remove('up');
    })
  })
 
}
const peep = () => {
  const time = randomTime(300,1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  // console.log(time,hole);
  setTimeout(() => {
    hole.classList.remove('up');
    if(!timeUp) {
      peep()
    };
  },time)
}
const startGame = () =>{
  score.innerText = 0;
  timeUp = false;
  peep();
  
  moles.forEach(mole =>{
    mole.addEventListener('click',()=>{
      mole.parentElement.classList.remove('up');
      scoreTally++;
      score.innerText = scoreTally;
      console.log(scoreTally);
    })
  })
  setTimeout(() => {timeUp = true;init();},10000)
}

start.addEventListener('click',()=> {
  scoreTally = 0;
  startGame();
  
})


// document.addEventListener('click',(event)=>{console.log(event);})
init();