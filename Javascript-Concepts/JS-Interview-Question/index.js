// var a = 2;
// var b =  3;
// var c =  2;
// console.log((a == b)) // returns false
// console.log((a == c)) //returns true

// Symbol - It is a new data type introduced in the ES6 version of javascript. It is used to store an anonymous and unique value.
// var symbol1 = Symbol('symbol')
// console.log(symbol1)

// typeof of primitive types :
// typeof "John Doe" // Returns "string"
// typeof 3.14 // Returns "number"
// typeof true // Returns "boolean"
// typeof 234567890123456789012345678901234567890n // Returns bigint
// typeof undefined // Returns "undefined"
// typeof null // Returns "object" (kind of a bug in JavaScript)
// typeof Symbol('symbol') // Returns Symbol

// Non-primitive types

// var obj1 ={
//     x:43,y:'hi',z:function(){
//         return this.x
//     }
// }
// console.log(obj1.z())

// Hoisting is a default behaviour of javascript where all the variable and function declarations are moved on top.

// hoistedVariable = 3;
// console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
// var hoistedVariable;


// hoistedFunction();  // Outputs " Hello world! " even when the function is declared after calling

// function hoistedFunction(){ 
//   console.log(" Hello world! ");
// }

// // Hoisting takes place in the local scope as well
// function doSomething(){
//     x = 33;
//     console.log(x);
//     var x;
//   }

// Difference between “ == “ and “ === “ operators.
// var x = 2;
// var y = "2";
// console.log(x == y)  // Returns true since the value of both x and y is the same

// console.log(x === y) // Returns false since the typeof x is "number" and typeof y is "string"

// String coercion
// var x = 3;
// var y = "3";
// console.log(x + y) // Returns "33" 

// var x = 24;
// var y = "Hello";
// console.log(x + y)   // Returns "24Hello";

// let name = "john";
// let surname = " jason";

// console.log(name + surname)

// var x = 3;
// var y = 3;
// console.log(x - y)

// var x = 20;
// var y = 23;
        
// if(x) { console.log(x) }   // The code inside this block will not run since the value of x is 0(Falsy)  
        
// if(y) { console.log(y) }

// var x = 220;
// var y = "Hello";
// var z = undefined;
        
// x || y    // Returns 220 since the first value is truthy
        
// x || z   // Returns 220 since the first value is truthy
        
// x && y    // Returns "Hello" since both the values are truthy
        
// y && z   // Returns undefined since the second value is falsy
        
// if( x && y ){ 
//   console.log("Code runs" ); // This block runs because x && y returns "Hello" (Truthy)
// }   
        
// if( x || z ){
//   console.log("Code runs");  // This block runs because x || y returns 220(Truthy)
// }

// var a = 12;
// var b = "12";
// console.log(a == b) // Returns true because both 'a' and 'b' are converted to the same type and then compared. Hence the operands are equal.


// Explain Higher Order Functions in javascript.
// Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

// function higherOrderFunction(fn){
//     fn()
// }
// higherOrderFunction(function(){console.log('hi')})

// function higherOrder2(){
//     return function(){
//         return "do something"
//     }
// }
// var x = higherOrder2()
// x()

// the function is a property of the global object.
// Therefore, the output of the above code will be the global object. Since we ran the above code inside the browser, the global object is the window object.

// var obj ={
//     name:'john',
//     getName:function(){
//         console.log(this.name)
//     } 
// }
// obj.getName()

// In the above code, at the time of invocation, the getName function is a
// property of the object obj , therefore, the this keyword will refer to 
// the object obj , and hence the output will be 'john'
// var obj = {
//     name:  "jason",
//     getName: function(){
//     console.log(this.name);
//   }
        
// }
        
// var getName = obj.getName;
        
// var obj2 = {name:"john", getName };
// obj2.getName();

//  Explain call(), apply() and, bind() methods.
// call() method allows an object to use the method (function) of another object.
// function sayHello(){
//     return "Hello " + this.name;
//   }
          
//   var obj = {name: "Sandy"};
          
// console.log(sayHello.call(obj));

// call() method takes arguments separately whereas,
// apply() method takes arguments as an array.
// function saySomething(message){
//     return this.name + " is " + message;
//   }
          
//   var person4 = {name:  "John"};
          
// console.log(saySomething.apply(person4, ["awesome"]))

// bind()
// This method returns a new function, where the value 
// of “this” skeyword will be bound to the owner object, 
// which is provided as a parameter.

// var bikeDetails = {
//     displayDetails: function(registrationNumber,brandName){
//     return this.name+ " , "+ "bike details: "+ registrationNumber + " , " + brandName;
//   }
// }
        
// var person1 = {name:  "john"};
        
// var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");
        
// // Binds the displayDetails function to the person1 object
               
// console.log(detailsOfPerson1());

// currying in JavaScript
// Currying is an advanced technique to transform
// a function of arguments n, to n functions of one
// or less arguments.

// function add (a) {
//     return function(b){
//       return a + b;
//     }
//   }
  
// console.log(add(3)(4))

// function multiply(a,b){
//     return a*b;
//   }
  
// function currying(fn){
//     return function(a){
//       return function(b){
//         return fn(a,b);
//       }
//     }
//   }
  
//   var curriedMultiply = currying(multiply);
  
//   multiply(4, 3); // Returns 12

// console.log(curriedMultiply(4)(3)); // Also returns 12

// Global Scope

// Variables or functions declared in the global 
// namespace have global scope, which means all 
// the variables andfunctions having global scope
// can be accessed from anywhere inside the code

// var globalVariable = "Hello world";

// function sendMessage(){
//   return globalVariable; // can access globalVariable since it's written in global space
// }

// function sendMessage2(){
//   return sendMessage(); // Can access sendMessage function since it's written in global space
// }

// console.log(sendMessage2());  // Returns “Hello world”

// Function Scope

// Any variables or functions declared inside a 
// function have local/function scope, which 
// means that all the variables and functions 
// declared inside a function, can be accessed 
// from within the function and not outside of it.

// function awesomeFunction(){
//     var a = 2;
  
//     var multiplyBy2 = function(){
//       console.log(a*2); // Can access variable "a" since a and multiplyBy2 both are written inside the same function
//     }
//   }
//   console.log(a); // Throws reference error since a is written in local scope and cannot be accessed outside
  
// multiplyBy2(); // Throws reference error since multiplyBy2 is written in local scope

// Block Scope

// Block scope is related to the variables declared 
// using let and const. Variables declared with var 
// do not have block scope.

// {
//     let x = 45;
//   }
  
//   console.log(x); // Gives reference error since x cannot be accessed outside of the block
  
//   for(let i=0; i<2; i++){
//     // do something
//   }
  
//   console.log(i); // Gives reference error since i cannot be accessed outside of the for loop block


// Scope Chain

// JavaScript engine also uses Scope to find variables.

// Let’s understand that using an example:

// var y = 24;

// function favFunction(){
//   var x = 667;
//   var anotherFavFunction = function(){
//     console.log(x); // Does not find x inside anotherFavFunction, so looks for variable inside favFunction, outputs 667
//   }

//   var yetAnotherFavFunction = function(){
//     console.log(y); // Does not find y inside yetAnotherFavFunction, so looks for variable inside favFunction and does not find it, so looks for variable in global scope, finds it and outputs 24
//   }

//   anotherFavFunction();
//   yetAnotherFavFunction();
// }


// favFunction();

// Closures is an ability of a function to remember the variables and functions that are declared in its outer scope.

var Person = function(pName){
  var name = pName;

  this.getName = function(){
    return name;
  }
}

var person = new Person("Neelesh");
console.log(person.getName());


// Let’s understand closures by example:

function randomFunc(){
  var obj1 = {name:"Vivian", age:45};

  return function(){
    console.log(obj1.name + " is "+ "awesome"); // Has access to obj1 even when the randomFunc function is executed

  }
}

var initialiseClosure = randomFunc(); // Returns a function

initialiseClosure(); 

// Let’s understand the code above,

// The function randomFunc() gets executed and returns a function when we assign it to a variable:

var initialiseClosure = randomFunc();

// The returned function is then executed when we invoke initialiseClosure:

 initialiseClosure(); 

// The line of code above outputs “Vivian is awesome” and this is possible because of closure.

// When the function randomFunc() runs, it sees that the returning function is using the variable obj1 inside it:

console.log(obj1.name + " is "+ "awesome");
