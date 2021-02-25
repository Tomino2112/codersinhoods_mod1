// install and  import "readline-sync" npm package before you do exercises
const readlineSync = require('readline-sync');

/**
 * Exercise 1
 *
 * ask user for a name and assign a response to variable {name}
 */
name = readlineSync.question("What is your name? ")

//===== DO NOT TOUCH THIS BLOCK =====
console.log(`Hi ${name}!`);
console.log("=====================");
console.log(`Let me do math for you!`);
console.log("=====================");
//===================================

/**
 * Exercise 2
 *
 * offer user to do some math, ask to provide a math symbol and
 * offer a few options: +, -, * or /
 * Save response to {selectedSymbol} variable.
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get correct symbol
 */
// selectedSymbol = readlineSync.keyIn("Please pick a symbol +,-,*,/ in reference to your desired equation: ",{limit:'/+-*',limitMessage:'Wrong Value! please pick out of +,-,*,/'});
const chooseSymbol = () => {
  const mySymbol = readlineSync.question("Please pick a symbol +,-,*,/ in reference to your desired equation: ");
  if(mySymbol === '+' || mySymbol == '-' || mySymbol == '/ '|| mySymbol== '*' ) {
    
    return mySymbol;

  }
  else {
    console.log("please enter a valid operator")
    chooseSymbol();
  }
}
const selectedSymbol = chooseSymbol();
/**
 * Exercise 3
 *
 * ask user for the first number and assign response to a variable {number1}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */
// number1 = readlineSync.questionInt('Please pick your first Number in your equation ')
const chooseNumber = (whichNumber) => {
  const chosenNumber = parseInt(readlineSync.question("Please choose your "+ whichNumber+ " number: "));
    
  if(Number.isInteger(chosenNumber)) {
    return chosenNumber;
    
  }
  else {
    console.log("Please enter a valid number")
    chooseNumber(whichNumber);
  }
}
const number1 = chooseNumber("first");
/**
 * Exercise 4
 *
 * ask user for the second number and assign response to a variable {number2}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */
// number2 = readlineSync.questionInt('Please pick your Second Number in your equation ')
const number2 = chooseNumber("Second");
/**
 * Exercise 5
 *
 * take numbers that user provided to you and do math based on user
 * selected symbol.
 *
 * show the result to the user
 */
let result = eval(number1+selectedSymbol+number2);

console.log("=====================");
console.log(`Here you go, the result is ${result}`);
