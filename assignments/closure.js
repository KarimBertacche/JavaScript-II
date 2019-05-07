// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let globalVar = "Global variable";
console.log(`I am the global object and I have access to only my ${globalVar}, but not other scoped functions variables`);

function outer(){
  let outerVar = "Outer variable";
  console.log(`I am the outer function and I have access to my ${outerVar}, and ${globalVar}, but not the inner scope function variable and innerMost function scope variable thanks to the power of closures`);
  function inner(){
    let innerVar = "Inner variable";
    console.log(`I am the inner function and I have access to my ${innerVar}, ${outerVar}, and ${globalVar}, but not the innerMost variable thanks to the power of closures`);
    function innerMost(){
      let innerMostVar = "Innermost variable";
      console.log(`I am the innerMost function and I have access to my ${innerMostVar} and to the ${innerVar}, ${outerVar}, and ${globalVar} thanks to the power of closures`);
    }
    innerMost();
  }
  inner();
}

outer();




/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
