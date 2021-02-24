// install and  import "readline-sync" npm package before you do exercises
const readlineSync = require('readline-sync');
const chalk = require('chalk');
const user = {};
/**
 * Exercise 1
 *
 * ask user for a first name and save response to {user.firstName}
 */
 user.firstName = chalk.bgBlue.yellow(readlineSync.question("May i have your FIRST name?"))
/**
 * Exercise 2
 *
 * ask user for a last name and save response to {user.lastName}
 */
user.lastName = chalk.bgBlue.yellow(readlineSync.question("May i have your LAST name?"));
console.log(`Hello ${user.firstName} ${user.lastName}!`);

/*
 * Exercise 3
 *
 * ask user for a age and save response to {user.age}
 */
user.age = chalk.blue(readlineSync.question("May i have your age?"))
/*
 * Exercise 4
 *
 * ask user for a email and save response to {user.email}
 */
user.email = chalk.red(readlineSync.question("May i have your emai address?"));
/**
 * OPTIONAL:
 *
 * use "chalk" to print out user data with colours :)
 */

console.log(
  `Here what we have, your full name is ${user.firstName} ${user.lastName}. 
    You are ${user.age} and if we need to contact with you we can send 
    a letter to ${user.email} `
);
