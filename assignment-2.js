// 1)Explain the difference between null and undefined in JavaScript.
/* Null is an empty value and is also a primitive type in JavaScript. The variable which has been assigned as null contains no value.
   Undefined, means the variable has been declared, but its value has not been assigned.*/

// 2)What will be the output of the following code snippet, and why?.
console.log('10'+5); 
// 105 beacause '+' operator in JS when we used with a string and a number, it converts the number to a string and concatenates them. So, '10' + 5 becomes "10" + "5", resulting in the string "105".  
console.log('10'-5);
// 5 beacause '-' operator in JS tries to convert both operands to numbers. The string '10' is converted to the number 10, and then 10 - 5 equals 5. 
console.log(true+2)
// 3 beacause in JS, true is converted to the number 1 when used in arithmetic operations. So, true + 2 becomes 1 + 2, which equals 3
console.log(false+undefined)
// NaN beacause false is converted to the number 0, but undefined cannot be converted to a number and results in NaN (Not a Number). Any arithmetic operation involving NaN will result in NaN, so 0 + NaN equals NaN.

// Q3. [1 Point] What is the difference between == and === in JavaScript? Provide examples.
/* The == operator compares two values for equality after converting them to a common type
   Example:console.log(5=="5");
   The === operator compares two values for equality without converting them to a common type. It checks both the value and the type.
   Example:console.log(true===1) */

   