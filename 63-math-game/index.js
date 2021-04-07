const gameContainer = document.querySelector('.gameDiv');
const choiceButtons = [...document.querySelectorAll('.buttons button')];
const buttonChoiceContainer = document.querySelector('.pick');
const questionsContainer = document.querySelector('.questions');
const questionDisplay = document.querySelector('.values');
const userInput = document.querySelector('.questions input');
const submit =document.querySelector('.submit');
const resetButton = document.querySelector('.reset');
const popup =document.querySelector('.popuptext');
const operators = ["+","-","/","*"];
const questions =[];
let questionAmmount;
let correctAnswers = 0;


resetButton.addEventListener('click',()=>{
  location.reload();
})

choiceButtons.forEach(button => {
  button.addEventListener('click', event => {
       questionAmmount =  event.target.value    
      //  console.log("question Ammount:",questionAmmount)
       buttonChoiceContainer.classList.toggle('hidden');
       questionsContainer.classList.toggle('hidden');
      //  resetButton.classList.toggle('hidden');
       startGame()
      //  console.log(questions);
  });
});

const randomOperator = () =>{
  const index = Math.floor(Math.random()*3)+1;
  return operators[index];
};
// console.log(randomOperator());

const questionGenerator = () =>{
  const number1 = Math.floor(Math.random()*100)+1;
  const number2 = Math.floor(Math.random()*100)+1;

  const question = number1 + randomOperator() + number2;
  // console.log(question);
  answer = Math.round(eval(question)*100)/100;
  questions.push({Question:question,Answer:answer});

};
questionGenerator();  

const startGame = ()=>{
  while(questions.length < questionAmmount){
    questionGenerator();
    
  }
  handleAnswer();
};

const handleAnswer = () =>{
  let i=0;
  questionDisplay.innerHTML = questions[i].Question;
  
    submit.addEventListener('submit', (event)=>{
      event.preventDefault();
      console.log(i);
      
      if(i<questions.length-1){
        // console.log(userInput.value)
        input = parseFloat(userInput.value)
        answer = questions[i].Answer
        
        // console.log(i);
        if(answer === input){
          correctAnswers++;
          // console.log('correct',correctAnswers);
          userInput.value ='';
          // console.log(input,questions[i].Answer)
          // i++;
        }
        
        userInput.value ='';
        // console.log(input,questions[i].Answer)
        i++;
        questionDisplay.innerHTML = questions[i].Question;
      } else{
        answer = questions[i].Answer
        input = parseFloat(userInput.value);
        
        const showpopup =()=>{
          percentage = correctAnswers/questionAmmount*100;
          popup.innerHTML = `
          <p>Total correct answers: ${correctAnswers}</p>
          <p>Thats ${percentage}%
          `
        }

        showpopup();
        // console.log(input,answer);
        if(answer === input){
          correctAnswers++;
          // console.log('done1');
          // console.log('Totalcorrect:',correctAnswers);
          resetButton.classList.toggle('hidden');
          popup.parentElement.classList.toggle('hidden');
          showpopup();
        }
        // console.log('done');
        // console.log('Totalcorrect:',correctAnswers);
        // percentage = correctAnswers/questionAmmount*100
        // popup.innerHTML = `
        // <p>Total correct answers: ${correctAnswers}</p>
        // <p>Thats ${percentage}%

        // `
        popup.parentElement.classList.toggle('hidden');
        resetButton.classList.toggle('hidden');
        showpopup();
      };
   

    });
 
  

};

// handleAnswer();