/**
 * Exercise 1
 *
 * Create a function `greet` which takes your name as a parameter
 * and return "Hello 'your_name'!"
 */
function greet(your_name) {
  return "Hello "+your_name+"!";
}
/**
 * Exercise 2
 *
 * Create a function `loginValidation` which takes age(number)
 * and returns "Welcome!" if the age is 18+ and "Sorry, not allowed."
 * if the age is less than 18
 */
function loginValidation(age) {
  if (age <18) {
    return "Sorry, not allowed.";
  } else {
    return "Welcome!";
  }
}
/**
 * Exercise 3
 *
 * Create a function `minNumber` which takes 2 numbers as params
 * and return the least one.
 */
function minNumber(a,b) {
  if(a<b){
    return a;
  } else {
    return b;
  }
}
/**
 * Exercise 4
 *
 * Create a function `randomNumber` which returns an integer between
 * 1 and 10, fraction should be rounded to lower integer
 */
function randomNumber() {
  randNum = Math.random()*10;
  return Math.floor(randNum);
}
/**
 * Exercise 5
 *
 * Create a function `getOppositeNumber` that takes a number as a param and
 * returns an opposite number
 */
function getOppositeNumber(num) {
  return num*(-1);
}