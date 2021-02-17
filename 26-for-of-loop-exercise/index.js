/* ===================================== */
/* For these exercises use "for of" loop */
/* ===================================== */

/**
 * Exercise 1
 *
 * create a function {getIntegersOnly} which takes an array
 * as a param, get all integers from this array and return
 * a new array with these integers. If there is no integers it should return
 * empty array.
 */
function getIntegersOnly(numbers) {
  let arr = []
  for (let number of numbers) {
    let numberIsInteger = Number.isInteger(number);
    if (numberIsInteger) {
      arr.push(number);
    }
    
  }
  return arr;
}

/**
 * Exercise 2
 * create a function {getEvenNumbers}, which takes an array of integers
 * and returns a new array with even numbers only, if there is no even
 * integers it should return an empty array
 */
function getEvenNumbers(numbers) {
  let arr = []
  for (let number of numbers) {
    if (number%2 ==0 ) {
      arr.push(number);
    }
    
  }
  return arr;
}
/**
 * Exercise 3
 *
 * create a function {getEvenNumbersFromMixedArray},
 * which takes an array of values with different types and returns
 * a new array with even numbers only, if there is no even integers it
 * should return an empty array
 */
function getEvenNumbersFromMixedArray(numbers){
  let arr =[];
  for (let evenNumber of numbers){
    let isInteger = Number.isInteger(evenNumber)
    if (evenNumber%2==0 && isInteger ) {
      arr.push(evenNumber);
    }
  }
  return arr;
}
/**
 * Exercise 4
 * create a function {getOddNumbers}, which takes an array of integers
 * and returns a new array with odd numbers only, if there is no odd
 * integers it should return an empty array
 */
function getOddNumbers(numbers){
  let arr =[];
  for (let oddNumber of numbers){
    let isInteger = Number.isInteger(oddNumber)
    if (oddNumber%2 && isInteger ) {
      arr.push(oddNumber);
    }
  }
  return arr;
}
/**
 * Exercise 5
 * create a function {evenOddTransform} which takes
 * array of integers as a param. Take each integer
 * and if it's odd add 1, if it's even subtract 1
 *
 * If your param is [1,2,3,4,5] the result should be
 * [2,1,4,3,6]
 */
function evenOddTransform(mixedInts){
  let arr =[];
  for (let mixedInt of mixedInts) {
    if(mixedInt%2==0){
      mixedInt = mixedInt - 1;
      arr.push(mixedInt);
    } else if(mixedInt%2) {
      mixedInt = mixedInt + 1;
      arr.push(mixedInt);
    }
    
  }
  return arr;
}

// const param = [34, 12, 64, 1, 5, 2, 8];
// console.log(evenOddTransform(param));