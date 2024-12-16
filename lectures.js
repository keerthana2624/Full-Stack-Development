// 1. History of JS
/* > In the early days of the internet, Microsoft offered a free web browser, which was attractive to users because Netscape's browser wasn't free. 
     Mosaic was a popular browser in 1990, but it wasn't free either.The creators of Mosaic later developed Netscape, which became known as Netscape Navigator.
   > JavaScript was created in 1995 by Brendan Eich at Netscape to compete with Microsoft's browser. Initially called Mocha, it was later renamed LiveScript, 
     and finally JavaScript. Microsoft developed a similar language called JScript.
   > In 1997, JavaScript was standardized by the European Computer Manufacturers Association (ECMA). Since then, it has been updated regularly according to 
     ECMAScript standards, with annual updates starting from 2016.
   > JS is very important for web development. It is used both on the front end (the part of websites users see) and the back end (with Node.js). 
     JS is versatile and works on both mobile and desktop applications.
*/



// 2. Data Types in JavaScript - 1
/* > Data types are important  for storing and manipulating data in programming
   > They are categories in to two types one is primitive and another is object types.
   > primitive data types include numbers,strings,boolean,null,undefied
   > number represent both integer and floating-point values, and different base number system can be used 
   Examples:
    >console.log(7+5);
    >let num=25458664125
     console.log(num*25)
    >let num=2.5
     console.log(typeof num);
    */

// 3. Data Types in JavaScript - 2
/* > A string is a collection of characters enclosed in single quotes('')
     double quotes(""),backticks(` `) 
     console.log("hello keerthi")
     let firstName="keerthi"
     let lastName="keerthana";
     console(firstName+lastName)
     console.log("good evening\thow r u?")
   > A boolean is a primitive data type that can only be either true or false.
     console.log(5 > 3);
     console.log(Boolean(1));
     console.log(true && false);
     console.log(!true);
   > undefined is a primitive data type that indicates that a variable has been declared but has not been assigned a value.
     let a;
     console.log(a);
     let b;
     console.log(typeof b);
   > null is a primitive data type in JavaScript that explicitly denotes the absence of any value.
     let b = null;
     console.log(b); 
     let x = null;
     console.log(x === null);
   >NaN is nothing but not a number
    let x=0/0;
    console.log(x);
    console.log(typeof NaN);
    console.log("10" - "five");
   */

// 4. Type Conversion and Coercion
/* > Type conversion is the process of converting a value from one data type to another and
     Type coercion is the automatic conversion of values from one data type to another by JavaScript during operations.
   >console.log("25" + 2);
    console.log(10 + ""); 
    console.log("5" / "4");
    console.log("hi" * "4");
    console.log(parseInt("225 hello"));
    */

// 5. Arithmetic Operators
/*  >This operators perform mathematical calculations on numeric values
    > let a = 4;
      let b = 2;
      let sum= a+b
      console.log(a + b);
      console.log(a-b);
      console.log(a/b);
      console.log(a*b);
*/

//6. Relational Operators
/*   > It is used to compare two values and determine thier relationship to each other.
       they return a boolean value based on the comparision.
     > console.log(2 == 2);
       console.log(10 > 5);
       console.log('5' === 5);
       console.log('5' != 5);
*/

//7. Logical Operators
/* >logical operators are used to perform logical operations on boolean values and evaluate expressions.
    The main types are AND (&&), OR (||), and NOT (!).
   >console.log(true && false);
    console.log(false && false);
    console.log(false && true);
    console.log(true || false);
    console.log(true || true);
    console.log(0 || 5);
    console.log(!false);
    console.log(!0);
    console.log(!'hello');
    */
//8. Ternary Operators
/*  > Ternary is operator is a concise way to perform conditional evaluations.
      It is a short way for the if - else statemennt,it is used for simple conditional expressions.
    > console.log(5 > 2?"greater":"smaller" );
    > let score=80;
      let result =score>=80?"pass":"fail"
      console.log(result)
    > let age=18;
      let vote=age>18?"canvote":"can not vote"
*/

//9. Template Literals
/*  >template literals are a feature that makes working with strings easier. They use backticks (`) and support multi-line strings, string interpolation (embedding variables), and expressions directly within strings.
    > let firstName="keerthi"
      let lastName="keerthana";
      console(`Fullname:${firstName} ${lastName}`)
    > let a = 10;
      let b = 5;
      console.log(`the product of ${a} and ${b} is ${a*b}.`)
    > let num1 = 8;
      let num2 = 12;
      console.log(`The average of ${num1} and ${num2} is ${(num1 + num2) / 2}.`);
*/

      
   
    
