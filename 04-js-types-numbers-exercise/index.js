/**
 * Exercise 1
 *
 * create a function "isOdd" which takes a number as a parameter
 * and return a string "Is odd" if it's odd or "Not odd" if it's
 * anything else
 */
function isOdd(number) {
  if (number%2==1) {
    return "Is odd"
  } else {
    return "Not odd"
  }
}
/**
 * Exercise 2
 *
 * create a function "isEven" which takes a number as a parameter
 * and return a string "Is even" if it's even or "Not even" if it's
 * anything else
 */
function isEven(number) {
  if (number%2 == 0 ) {
    return "Is even"
  } else {
    return "Not even"
  }
}
/**
 * Exercise 3
 *
 * create a function "oddOrEven" which takes a number as a parameter
 * and return a string "Is odd" if it's odd or "Is even" if it's even
 */
function oddOrEven(number) {
  if (number%2 == 0 ) {
    return "Is even"
  } else if (number%2==1) {
    return "Is odd"
  }
}
/**
 * Exercise 4
 *
 * create function "roundedNumber" which takes a fraction as a parameter
 * and return rounded integer
 */
function roundedNumber(fraction) {
  return Math.round(fraction);
}
/**
 * Exercise 5
 *
 * create function "roundToLowerInteger" which takes a fraction as a parameter
 * and returns the largest integer less than or equal to a given number
 */
function roundToLowerInteger(fraction) {
  return Math.floor(fraction);
}
/**
 * Exercise 6
 *
 * create function "roundToLargerInteger" which takes a fraction as a parameter
 * and returns rounded number up to the next largest integer
 */
function roundToLargerInteger(fraction) {
  return Math.ceil(fraction);
}
/**
 * Exercise 7
 *
 * create function "convertToPositive" which takes a negative number as a parameter
 * and returns same number but positive
 */
function convertToPositive(n) {
  return Math.abs(n);
}
/**
 * Exercise 8
 *
 * create function "findMaxNumber" which takes a few numbers(at least 4 numbers) as a parameters
 * and returns the maximum number
 */
function findMaxNumber(...nums) {
  return Math.max(...nums);
}
/**
 * Exercise 9
 *
 * create function "findMinNumber" which takes a few numbers(at least 4 numbers) as a parameters
 * and returns the minimum number
 */
function findMinNumber(...array) {
  return Math.min(...array);
}