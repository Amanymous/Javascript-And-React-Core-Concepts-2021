// function hoist() {
//     a = 20;
//     var b = 100;
// }

// hoist();

// console.log(a);

// console.log(b);
// Since it was declared, it is confined to the hoist() function scope.
// We can't print it out outside the confines of the hoist() function.
// Output: ReferenceError: b is not defined

// function hoist() {
//     console.log(message);
//     var message='Hoisting is all the rage!'
//   }
  
// hoist();

// variable initialization hoisted
// const PI = 3.142;

// PI = 22/7; // Let's reassign the value of PI

// console.log(PI);
// error

let PI = 3.142;

PI = 22/7; // Let's reassign the value of PI

console.log(PI);

hoisted(); // Output: "This function has been hoisted."

function hoisted() {
  console.log('This function has been hoisted.');
};
// Function Expressions
//expression(); //Output: "TypeError: expression is not a function

var expression = function() {
  console.log('Will this work?');
};

// var double = 22;

// function double(num) {
//   return (num*2);
// }

// double(20)
// console.log(typeof double); // Output: number

// var Frodo = new Hobbit();
// Frodo.height = 100;
// Frodo.weight = 300;
// console.log(Frodo); // Output: ReferenceError: Hobbit is not defined

// class Hobbit {
//   constructor(height, weight) {
//     this.height = height;
//     this.weight = weight;
//   }
// }
