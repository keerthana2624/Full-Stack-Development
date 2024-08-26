// Q1. FLATTENING
// Use the reduce method in combination with the concat method to “flatten” an array of arrays into a
// single array that has all the elements of the original arrays.
// let arrays = [[1, 2, 3], [4, 5], [6]];

// let arrays = [[1, 2, 3], [4, 5], [6]];



let arrays = [[1, 2, 3], [4, 5], [6]];
let flattenedArray = [];

for (let i = 0; i < arrays.length; i++) {
  flattenedArray = flattenedArray.concat(arrays[i]);
}
// console.log(flattenedArray);




// Q2. YOUR OWN LOOP
// Write a higher-order function loop that provides something like a for loop statement. It should take a
// value, a test function, an update function, and a body function. Each iteration, it should first run the
// test function on the current loop value and stop if that returns false. It should then call the body
// function, giving it the current value, and finally call the update function to create a new value and
// start over from the beginning.
// When defining the function, you can use a regular loop to do the actual looping.
// loop(3, n => n > 0, n => n - 1, console.log);
// // → 3
// // → 2
// // → 1

function loop(value, test, update, body) { 
    while (test(value)) {    
        body(value);         
        value = update(value); 
    }
}

// loop(3, n => n > 0, n => n - 1, console.log);



// Q3. EVERYTHING
// Arrays also have an every method analogous to the some method. This method returns true when
// the given function returns true for every element in the array. In a way, some is a version of the ||
// operator that acts on arrays, and every is like the && operator.
// Implement every as a function that takes an array and a predicate function as parameters. Write two
// versions, one using a loop and one using the some method.
// // Skeleton code

function every(array, test) {
// Your Code...
    for (let element of array) {
      if (!test(element)) {
        return false; 
      }
    }
    return true; 
  }
// console.log(every([1, 3, 5], n => n < 10));
// console.log(every([2, 4, 16], n => n < 10));
// console.log(every([], n => n < 10));

// some method
function every(array, test) {
    return !array.some(element => !test(element));
  }  
// console.log(every([1, 3, 5], n => n < 10));
// console.log(every([2, 4, 16], n => n < 10));
// console.log(every([], n => n < 10));
  

