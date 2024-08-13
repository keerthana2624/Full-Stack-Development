// Q1.Explain the difference between null and undefined in JavaScript.
/* Null is an empty value and is also a primitive type in JavaScript. The variable which has been assigned as null contains no value.
   Undefined, means the variable has been declared, but its value has not been assigned.*/

// Q2.What will be the output of the following code snippet, and why?.
console.log('10'+5); 
// 105 because '+' operator in JS when we used with a string and a number, it converts the number to a string and concatenates them. So, '10' + 5 becomes "10" + "5", resulting in the string "105".  
console.log('10'-5);
// 5 because '-' operator in JS tries to convert both operands to numbers. The string '10' is converted to the number 10, and then 10 - 5 equals 5. 
console.log(true+2)
// 3 because in JS, true is converted to the number 1 when used in arithmetic operations. So, true + 2 becomes 1 + 2, which equals 3
console.log(false+undefined)
// NaN beacause false is converted to the number 0, but undefined cannot be converted to a number and results in NaN (Not a Number). Any arithmetic operation involving NaN will result in NaN, so 0 + NaN equals NaN.

// Q3.What is the difference between == and === in JavaScript? Provide examples.
/* The == operator compares two values for equality after converting them to a common type
   Example:console.log(5=="5");
   The === operator compares two values for equality without converting them to a common type. It checks both the value and the type.
   Example:console.log(true===1) */
// Q4.Predict the output of the following expressions and explain your reasoning:
console.log(0==false);
// true because the '==' operator performs type coercion, meaning it converts the operands to a common type before comparing them. In this case, false is converted to 0, so the comparison becomes 0 == 0, which is true.
console.log(0===false);
// false because the '===' operator checks for both value and type equality without any type coercion. Here, 0 is a number and false is a boolean. Since they are of different types, the comparison returns false.
console.log(''==0);
// true because the '==' operator again performs type coercion. The empty string '' is converted to the number 0, so the comparison becomes 0 == 0, which is true.
console.log(''===0);
// false because the '===' operator checks for both value and type equality. The empty string '' is a string, and 0 is a number. Since they are of different types, the comparison returns false.

// Q5.Given the following code, what will be the output and why?
console.log(0||1&&2||3);
// 2 because evaluate the && operator first. The expression 1 && 2 evaluates to 2 because && returns the second operand if the first is truthy.
console.log(false||(true||false)||true);
// true because the expression (true || false) result will be true, simplifying it to false || true || true. Then, false || true gives true, and true || true remains true.
console.log(0&&1||2&&3);
// 3 because The && operators are evaluated first: 0 && 1 gives 0, and 2 && 3 gives 3. This simplifies the expression to 0 || 3, which evaluates to 3.


// Q6. [1 Point] Predict the output of the following expressions and explain your reasoning:
let a=10,b=20,c=30
console.log(a+b*c);
// 610 because it Multiplies b and c first (20 * 30 = 600), then adds a (10 + 600 = 610).It follows the bodmas rule.
console.log((a+b)*c);
// 900 because it Adds a and b first (10 + 20 = 30), then multiplies by c (30 * 30 = 900),It also follows the bodmas rule.
console.log(a+b>c?a:b);
// 20 because it Checks if a + b is greater than c (30 > 30 is false), so it returns b
console.log((a>b)&&(b>c)||(a>c));
// false because Both conditions (a > b) and (b > c) are false, so the result of && is false, and || (a > c) is also false.


// Q7. [2 Points] Analyze and explain the output of the following code snippets:
console.log([]+{});
// [object Object] because the '+' operator blw array and object converts to string.So,'[]' becomes empty string as "" and {} becomes [object obect] then the result [object object]
console.log({}+[]);
// [object Object] 
console.log([]==![]);
// true
console.log(''==[]);
// true because '' (empty string) is loosely compared to []. When [] is coerced to a string, it becomes "", making the comparison "" == "".


// Q8. [2 Points] What will be the output of the following code, and why?
console.log(+"");
/*0 because The + operator is used for numeric conversion. When applied to a string that is empty (""), it converts the empty string to 0.
+"" converts the empty string to a number, which results in 0.*/
console.log(+true);
// 1 because +true converts true to 1, because in JavaScript, true is represented as 1 and false as 0 in numeric contexts
console.log(+false);
// 0 because +false converts false to 0, because false is represented as 0 in numeric contexts.
console.log(+null);
// 0 because +null converts null to 0, because null is represented as 0 in numeric contexts.
console.log(+undefined);
// NaN because +undefined results in NaN (Not-a-Number) because undefined cannot be converted to a valid numeric value.


