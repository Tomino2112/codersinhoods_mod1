/**
 * Exercise 1
 *
 * create an object {user}, which has
 * properties "firstName", "lastName" and "age"
 *
 * PS: use console.log() to see the result
 */
const user ={
  firstName: "Atik",
  lastName: "Patel",
  age: 34
}
// console.log(user);
/**
 * Exercise 2
 *
 * create an object {allTypes} with a property of types:
 * string, number, array, object, function, boolean
 *
 * PS: use console.log() to see the result
 */
const allTypes = {
  string: "this is a string",
  number: 32,
  array: [1,2,3,4,5],
  object: {One:1, Two:2, Three:3},
  function: function() {
    return this.number + ' and ' + this.array;
  },
  boolean: true
}
// console.log(allTypes);
/**
 * Exercise 3
 *
 * create a function {createMovieObject} which takes
 * name, rating and ticketPrice and returns a movie object
 * with these properties
 *
 * PS: use console.log() to see the result
 */


function createMovieObject(name, rating, ticketPrice) {
  const movie = {
    name,
    rating,
    ticketPrice
  }
  return movie;
}
console.log(createMovieObject('Matrix', 10, 5));