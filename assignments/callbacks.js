// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
function higherOrderFoo(arr, cb){
  return cb(items[0]);
}

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr.length -1);
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  for(let i = 0; i < list.length; i++){
    // Pass true to the callback if it is, 
    if(item === list[i]){
      return cb(true);
    } 
  }
  //otherwise pass false.
  return cb(false);
}

/* STRETCH PROBLEM */
function removeDuplicates(array) {
  const noDuplicates = array.reduce((accumulator, currentValue) => {
    //Check if the element is present in the original array
    if(accumulator.indexOf(currentValue) === -1){
      //Add to the accumulator the array instance created using concat
      return accumulator.concat(currentValue);
    }
    //return the accumulator for next iteration
    return accumulator;
  }, []);
  // Pass the duplicate free array to the callback function.
  return noDuplicates;
}

