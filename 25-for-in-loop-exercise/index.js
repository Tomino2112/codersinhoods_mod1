/**
 * Exercise 1
 * create a function {logProperties} which will
 * take object as a param and console log each property in a format
 * "Property name: {propertyName}"
 */
function logProperties(properties) {
  for (let property in properties) {
    console.log("Property name: " +property);
  }
}
/**
 * Exercise 2
 * Create a function {getAllValues} that takes an object
 * and returns an array of all values.
 */

function getAllValues(object) {
  let values= []
  for (let value in object) {
   values.push(object[value]);
  }
  return values;
}

/**
 * Exercise 3
 * Create a function {getAllValuesAsString} that takes an object
 * and returns all values as one string with space separation.
 */
function getAllValuesAsString(object) {
  let string = "";
  for (let word in object) {
    string = string+object[word]+' ';

  }
  return string.trim();
}

/**
 * Exercise 4
 * Create a function {propertyValueString} that takes object as a param
 * and log property and values as string in a next format:
 * "{key}: {value}"
 */

 function propertyValueString(object) {
  let newObj = "";
  for (let keyValue in object) {
    newObj = keyValue +":"+' '+ object[keyValue];
    console.log(newObj);
  }
  
 }
