// 
/**
 * !!! IMPORTANT !!!
 * 
 * USE "for" loop to recreate all JS pre-built functions
 */

/**
 * Exercise #1
 *
 * create a function forEach(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is
 * passed each element and the index.
 *
 */
function forEach(array, callback) {
  
  for (let i=0;i<array.length;i++) {
    callback(array[i],i);
  }
  
}


/**
 * Exercise #2
 *
 * create a function map(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * whatever was returned from each
 * time the callback was invoked.
 *
 */
function map(array, callback) {
  let mappedArray =[];
  for (let i=0;i<array.length;i++) {
    let result = callback(array[i],i);
    mappedArray.push(result);
  }
  return mappedArray;

}
/**
 * Exercise #3
 *
 * create a function filter(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * _only_ the elements for which the
 * callback returned a truthy value.
 *
 */
function filter(array,callback) {
  let filteredArray =[];
  for (let i=0;i<array.length;i++) {
    let result = callback(array[i],i);
      if(result == true){
        filteredArray.push(array[i]);
       }
  }
  return filteredArray;
 
}
/**
 * Exercise #4
 *
 * create a function find(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _first element_
 * for which the callback returns a
 * truthy value.
 *
 */
function find(array,callback) {
  let found =[];
  for (let i=0;i<array.length;i++) {
    let result = callback(array[i],i);
      if(result == true){
        found.push(array[i]);
        break;
       }
  }
  return found[0];
 
}

/**
 * Exercise #5
 *
 * findIndex(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _index of
 * the first element_ for which the
 * callback returns a truthy value.
 *
 */
function findIndex(array,callback) {
  let foundIndex =[];
  for (let i=0;i<array.length;i++) {
    let result = callback(array[i],i);
      if(result == true){
        foundIndex.push(i);
        break;
       }
  }
  return foundIndex[0];
 
}
/**
 * Exercise #6
 *
 * every(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns a boolean value
 * representing if every time the
 * callback was invoked it returned
 * a truthy value.
 *
 */
// function every(array,callback) {
//   let everyTrue =[];
//   for (let i=0;i<array.length;i++) {
//     let result = callback(array[i],i);
//     console.log(result);
//      if(!result) {
//       break;
//       return false;
      
//      } else {
//       everyTrue.push(result) 
//      }
     
//   }
//   console.log(everyTrue);
//   if(everyTrue.length == array.length) {
//     return true;
//   } else {
//     return false;
//   }
 
// }
function every(array,callback) {

  for (let i=0;i<array.length;i++) {
    let result = callback(array[i],i);
     if(!result) {
      return false;
     }
     
  } 
  return true;
 
}
/**
 * Exercise #7
 *
 * some(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns a boolean value
 * representing if _any_ time the
 * callback was invoked it returned
 * a truthy value.
 *
 */
function some(array,callback) {
  for (let i=0;i<array.length;i++) {
    let result = callback(array[i],i);
    if(result === true) {
      return true;
    }
  }
}
/**
 * Exercise #8
 *
 * reduce(array, callback, initialValue)
 *
 * Reduce is often used for combining
 * values together.
 *
 * `reduce` should take 3 arguments:
 * `array`, `callback` and `initialValue`.
 *
 * The callback is invoked for every
 * element in the array and is passed
 * **the current cumulative value**,
 * each element and the index. Whatever
 * the callback returns is the new
 * cumulative value. The function
 * should return the final cumulative
 * value.
 *
 */
function reduce(array, callback, initialValue=0) {
  
  let currentValue = initialValue;
  for(i=0;i<array.length;i++) {
   
    currentValue = callback(currentValue,array[i],i);
    


  }

  return currentValue;
  
};
