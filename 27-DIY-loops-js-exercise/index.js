const dataTypes = [
  4,
  "hello",
  "2",
  { name: "Alex" },
  54,
  "random",
  23,
  "kitten",
  13.21,
  [1, 2, 3, 4],
  { type: "boolean" },
  [32, 52],
  43.1,
];

/**
 * Exercise 1
 *
 * create a function {sortedData} which will take data as param
 * (you can use){dataTypes} and sort it by type:
 * 1. strings,
 * 2. integers,
 * 3. floats,
 * 4. arrays,
 * 5. objects
 *
 * and return object with property names equals types, and values should be
 * arrays with  corespondent data
 *
 * Ex: const data = [5, 'kitten', 3.12, 12]
 *
 * result:
 * {
 *  integers: [5, 12],
 *  strings: ['kitten'],
 *  floats: [3.12]
 * }
 */
function sortedData(dataTypes) {
  
  let things = {strings:[],integers:[],floats:[],arrays:[],objects:[]};
  
  for (let data in dataTypes) {
    let thing = dataTypes[data];
    switch(true) {
      case (typeof(thing)=== "string"): things.strings.push(thing);
      break;
      case (typeof(thing)=== "number" && thing%1 === 0 ): things.integers.push(thing);
      break;
      case (typeof(thing)=== "number" && thing%1 !== 0 ): things.floats.push(thing);
      break;
      case (typeof(thing)=== "object" && Array.isArray(thing)): things.arrays.push(thing);
      break;
      case (typeof(thing)=== "object" && Array.isArray(thing) === false): things.objects.push(thing);
      break;
    }

    

  }
  return things;
}

// console.log(sortedData(dataTypes));
/**
 * Exercise 2
 *
 * create a function {multipliedByNextNumber} which takes
 * an array of numbers and returns a new array where number equals
 * multiplication of number from passed array and the following number.
 * Presume that the following number for the last one is 1.
 *
 * Ex: pass [3,2,6]
 * result: [6, 12, 6]
 */
function multipliedByNextNumber(numbers) {
  let arr = [];
  for (i = 0; i<numbers.length;i++){
    let value = numbers[i]; // value of array
    let valuePlus = numbers[i+1];
    if ((i+1) != numbers.length) {
      value = value * valuePlus;
      arr.push(value);
    } else if((i+1) == numbers.length){
      value = value * 1;
      arr.push(value);
    }

    }
    return arr;


  }
  

// let numb = [3,2,6];
// console.log(multipliedByNextNumber(numb));
/**
 * Exercise 3
 *
 * create a function {multipliedEvenNumbers} which multiply
 * even number from passed array with following even number.
 * If there is no following even numbers, multiply by 2.
 *
 * return new numbers as new array
 *
 * ex: multipliedEvenNumbers([4,3,6,8,5,7])
 * result: [24, 3, 48, 16, 5, 7]
 */

function multipliedEvenNumbers(arr) {
  const evenArr = arr.filter((num) => num % 2 === 0);
  const multiplied = evenArr.map((num, index) => {
    if (evenArr[index + 1] !== undefined) {
      return num * evenArr[index + 1];
    } else {
        return num * 2
    }
  });
  const result = arr.map(num => {
      if(num % 2) {
          return num;
      } else {
          return multiplied.shift();
      }
  })
  return result
}

// function multipliedEvenNumbers(numbers){
//   let tempArr=[];
//   let arr = [];
//   for (i=0;i<numbers.length;i++){
    
//     tempArr = numbers.filter( number => number%2 === 0)
  
//   }

//   let multipliedArray =[];

//   for (j=0;j<tempArr.length;j++){

//     let nextEven =tempArr[j+1];
//     let even = tempArr[j];
    
//     if (j < tempArr.length-1) {    
//       let multiplied = even * nextEven;
//       multipliedArray.push(multiplied);
//     } else {
//       let multiplied = even *2;
//       multipliedArray.push(multiplied);
//     }
    
//   }
//   if (numbers.length !== 0) {
//     for (k=0;k<numbers.length;k++){

//       if (numbers[k]%2 === 0) {
//         let numberToReplace = multipliedArray.shift();
//         // console.log(numberToReplace);
//         arr.splice(k,0,numberToReplace);
//       } else {
//         arr.push(numbers[k]);
//       }
//       // console.log(arr);
      
//     }
//       return arr
//   } else {
//     return numbers =[];
//   }
  
// }


// /**
//  * Exercise 4
//  *
//  * create a function {multipliedOddNumbers} which multiply
//  * even number from passed array with following even number.
//  * If there is no following even numbers, multiply by 1.
//  *
//  * return new numbers as new array
//  *
//  * ex: multipliedEvenNumbers([4,3,6,8,5,7])
//  * result: [4, 15, 6, 8, 35, 7]
//  */


function multipliedOddNumbers(arr) {
  const oddArr = arr.filter((num) => num % 2);
  const multiplied = oddArr.map((num, index) => {
    if (oddArr[index + 1] !== undefined) {
      return num * oddArr[index + 1];
    } else {
        return num * 1
    }
  });
  const result = arr.map(num => {
      if(num % 2 === 0) {
          return num;
      } else {
          return multiplied.shift();
      }
  })
  return result
}



// function multipliedOddNumbers(numbers){
//   let tempArr=[];
//   let arr = [];
//   for (i=0;i<numbers.length;i++){
    
//     tempArr = numbers.filter( number => number%2)
  
//   }

//   let multipliedArray =[];

//   for (j=0;j<tempArr.length;j++){

//     let nextOdd =tempArr[j+1];
//     let odd = tempArr[j];
    
//     if (j < tempArr.length-1) {    
//       let multiplied = odd * nextOdd;
//       multipliedArray.push(multiplied);
//     } else {
//       let multiplied = odd *1;
//       multipliedArray.push(multiplied);
//     }
    
//   }
//   if (numbers.length !== 0) {
//     for (k=0;k<numbers.length;k++){

//       if (numbers[k]%2) {
//         let numberToReplace = multipliedArray.shift();
//         // console.log(numberToReplace);
//         arr.splice(k,0,numberToReplace);
//       } else {
//         arr.push(numbers[k]);
//       }
//       // console.log(arr);
       
//     }
//       return arr
//   } else {
//     return numbers =[];
//   }
  
// }

// console.log(multipliedOddNumbers([4,3,6,8,5,7]));
/**
 * Exercise 5
 *
 * create a function {multipliedEvenOddNumbers} which will take
 * an array and type "even" or "odd".
 *
 * If you pass "even" do the same what you have for exercise 3
 * if you pass "odd" do the same what you have for exercise 4
 * else return original array.
 */
function multipliedEvenOddNumbers(numbers,type) {
  // if (numbers.length !== 0) {
    if(type == "even") {
    return multipliedEvenNumbers(numbers);
    } else if(type == "odd") {

    return multipliedOddNumbers(numbers);
  
  } else {
    return numbers;
  }
}
  


console.log(multipliedEvenOddNumbers([4,3,6,8,5,7]));