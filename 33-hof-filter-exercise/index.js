/**
 * Exercise 1
 *
 * create a function {noStrings} that takes an array
 * as a parameter and return an array but without strings
 */
const noStrings = list => list.filter(listItem => (typeof listItem!="string"));
/**
 * Exercise 2
 *
 * create a function {justStrings} that takes an array
 * as a parameter and return an array of strings by removing
 * every other type
 */
const justStrings = list => list.filter(listItem => (typeof listItem == "string"));
/**
 * Exercise 3
 *
 * create a function {justStringsLongerThan5} that takes
 * an array as a parameter and retur
 * n an array of strings
 * that are longer than 5 characters
 */
const justStringsLongerThan5 = list => list.filter(listItem => ((typeof listItem=="string") && (listItem.length > 5)));
/**
 * Exercise 4
 *
 * create a function {numbersMoreThan13} that takes
 * an array as a parameter and return an array of numbers
 * that are more than 13
 */
const numbersMoreThan13 =list => list.filter(listItem => listItem > 13);
/**
 * Exercise 5
 *
 * create a function {objectsOnly} that takes
 * an array as a parameter and return an array of objects
 */
const objectsOnly = objects => objects.filter(object => (typeof object == "object" ));
/**
 * Exercise 6
 *
 * create a function {truthyOnly} that takes
 * an array as a parameter and return an array of truthy values.
 * IMPORTANT: You still need to keep number 0.
 */
const truthyOnly = values => values.filter(value => ( Boolean(value) ||value=== 0 ));

const param1 = [
  "kitten",
  {},
  0,
  { name: "Alex" },
  undefined,
  NaN,
  ["pet"],
  "",
  26,
  false
];
console.log(truthyOnly(param1));