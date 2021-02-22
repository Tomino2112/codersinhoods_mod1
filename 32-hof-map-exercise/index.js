// ============================================
// ALL IMPLEMENTATIONS SHOULD BE WITH {map} METHOD
// ============================================

/**
 * Exercise 1
 *
 * create an arrow function {convertToPositive} which takes
 * array of numbers, convert all negatives to positives and return
 * a new array.
 */
const convertToPositive = (negNumbers) => {
  const posNumbers = negNumbers.map(negNumber => {
  const posNumbers =[];
  if(negNumber <0) {
    // console.log(negNumber);
    return negNumber*(-1);
  } else {
    return negNumber
  }
})
return posNumbers;
}

console.log(convertToPositive([-1,-2,-3,-5]))
/**
 * Exercise 2
 *
 * create an arrow function {getAllNames} which will take
 * an array of users(objects) as parameter and return an
 * array on names
 *
 * Ex: getAllNames([
 *   {name: 'Alex', age: 26},
 *   {name: 'John', age: 25}
 * ]) will return ['Alex', 'John']
 */
const getAllNames = users => {
  const userArray = users.map(user => {
    return user.name;
  });
  return userArray;
}
/**
 * Exercise 3
 *
 * create a function {greetAll} that takes array of names as a parameter
 * and return a new array of greetings "Hi, {name}!"
 */
const greetAll = names => {
  const newNames = names.map(name => `Hi, ${name}!`) ;
  return newNames
}

console.log(greetAll(["harry","john"]))
/**
 * Exercise 4
 *
 * create a function {multiplyAllNumbers} that takes an array as a param
 * and multiply all numbers inside array by 5 and return the whole array
 * with multiplied numbers
 */
const multiplyAllNumbers = numbers => {
  const multipliedArray = numbers.map(number => {
    if(typeof number == "number")
    { return number*5;
    } else {
      return number;
    }
  })
  return multipliedArray;
}
console.log(multiplyAllNumbers([1,"hello",2,3,4]));