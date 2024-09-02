// Q1. RETRY
// Say you have a function primitiveMultiply that in 20 percent of cases multiplies two numbers and in the other
// 80 percent of cases raises an exception of type MultiplicatorUnitFailure. Write a function that wraps this
// clunky function and just keeps trying until a call succeeds, after which it returns the result.
// Make sure you handle only the exceptions you are trying to handle.
// class MultiplicatorUnitFailure extends Error {}
// function primitiveMultiply(a, b) {
// if (Math.random() < 0.2) {
// return a * b;
// } else {
// throw new MultiplicatorUnitFailure("Klunk");
// }
// }
// function reliableMultiply(a, b) {
// // Your code here.
// }
// console.log(reliableMultiply(8, 8));
// // → 64

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b; // Successful multiplication 20% of the time
  } else {
    throw new MultiplicatorUnitFailure("Multiplication failed"); // Throws an error 80% of the time
  }
}

function reliableMultiply(a, b) {
  while (true) { // Keep trying until we succeed
    try {
      return primitiveMultiply(a, b); // Try to multiply
    } catch (e) { // If there's an error...
      if (e instanceof MultiplicatorUnitFailure) {
        // ...and it's the right kind of error, do nothing and try again
        continue;
      } else {
        // If it's another type of error, re-throw it
        throw e;
      }
    }
  }
}

console.log(reliableMultiply(8, 8)); // This should eventually print 64


// Q2. THE LOCKED BOX
// Consider the following (rather contrived) object:
// const box = new class {
// locked = true;
// #content = [];
// unlock() { this.locked = false; }
// lock() { this.locked = true; }
// get content() {
// if (this.locked) throw new Error("Locked!");
// return this.#content;
// }
// };
// It is a box with a lock. There is an array in the box, but you can get at it only when the box is unlocked.
// Write a function called withBoxUnlocked that takes a function value as argument, unlocks the box, runs the
// function, and then ensures that the box is locked again before returning, regardless of whether the argument
// function returned normally or threw an exception.
// const box = new class {
// locked = true;
// #content = [];
// unlock() { this.locked = false; }

// lock() { this.locked = true; }
// get content() {
// if (this.locked) throw new Error("Locked!");
// return this.#content;
// }
// };
// function withBoxUnlocked(body) {
// // Your code here.
// }
// withBoxUnlocked(() => {
// box.content.push("gold piece");
// });
// try {
// withBoxUnlocked(() => {
// throw new Error("Pirates on the horizon! Abort!");
// });
// } catch (e) {
// console.log("Error raised: " + e);
// }
// console.log(box.locked);
// // → true
// For extra points, make sure that if you call withBoxUnlocked when the box is already unlocked, the box stays
// unlocked.


const box = new class {
    locked = true; // Initially, the box is locked
    #content = []; // Private content inside the box
    
    unlock() { this.locked = false; } // Unlock method
    lock() { this.locked = true; } // Lock method
    

get content() {
    if (this.locked) throw new Error("Locked!"); // Error if trying to access while locked
    return this.#content; // Return the content if unlocked
  }
};

function withBoxUnlocked(body) {
  let wasLocked = box.locked; // Check if the box was originally locked
  
  if (wasLocked) {
    box.unlock(); // Unlock the box if it was locked
  }
  
  try {
    body(); // Run the function passed as an argument
  } catch (e) {
    console.log("Error raised: " + e); // Log any error that was raised
  } finally {
    if (wasLocked) {
      box.lock(); // Lock the box again if it was initially locked
    }
  }
}

withBoxUnlocked(() => {
  box.content.push("gold piece"); // Add "gold piece" to the box
});

try {
  withBoxUnlocked(() => {
    throw new Error("Pirates on the horizon! Abort!"); // Throw an error inside the function
  });
} catch (e) {
  console.log("Error raised: " + e); // Catch and log any error from withBoxUnlocked
}

console.log(box.locked); // Check if the box is locked again
// → true
