const limitForm = document.querySelector('.howMuch');
const textDiv = document.querySelector('.limitedArea');
const textarea = document.querySelector('.limitedArea .textArea textarea');
const howMany = document.querySelector('.howMany');
const written = document.querySelector('.written');
const remaining = document.querySelector('.remaining');

let inputValue = 0;
let characterLength =0;

limitForm.addEventListener('submit',(event)=>{
  event.preventDefault();
  textDiv.classList.remove('hidden');
  const input = limitForm.querySelector('input');
  if(input.value){

    inputValue = parseInt(input.value);
  }
  remaining.innerText ="Characters Remaining: "+  inputValue;
  input.value = '';
  textarea.maxLength = inputValue;
  
})

textarea.addEventListener('keyup',(event)=>{
  characterLength = textarea.value.length;
  remaining.innerText ="Characters Remaining: "+ (inputValue - characterLength);
  written.innerText = `Written characterCount: ${characterLength}`;
})
howMany.addEventListener('click',(event)=>{
  written.classList.toggle('hidden');
  ;
})