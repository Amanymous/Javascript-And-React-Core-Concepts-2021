// var Person = function (firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// };

// var john = new Person('John', 'Doe');
// var jane = Person('Jane', 'Doe');



// console.log(john); // Person {firstName: 'John' , lastName: 'Doe'}
// console.log(jane); // undefined
// console.log(window) // Oh dear! The global object now has firstName and lastName!

// Constructor function
// function Identity(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.fullName = function() {
//       return this.firstName + ' ' + this.lastName;
//     };
//   }
//   let identity = new Identity('Alex', 'Ferguson', 50);
//   console.log(identity);
//   console.log(identity.fullName());

//   New Operator

// function sayHi(){
//     console.log("yo")
// }
// new sayHi()

// function fn(firstName,lastName,age){
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.fullName = function(){
//         return this.firstName + ' ' + this,lastName
//     }
// }

// function newClone(ConstFunc,...theArgs){
//     let obj = {}
//     Object.setPrototypeOf(obj,ConstFunc.prototype)

//     let ret = ConstFunc.call(obj,...theArgs)

//     if(ret == Object) return ret
//     return obj;
// }
// personClone = newClone(fn,"muhammad","aman",22)
// console.log(personClone)

// func = new fn("aman","muhammad",22)
// console.log(func)

// Single Use constructors using new
// let person = new function(){
//     this.firstName = 'muhammad'
//     this.lastName = 'aman'

// }()
// console.log(person)

// Return from constructors
// function person(firstName,lastName){
//     this.firstName = firstName
//     this.lastName = lastName
//     this.displayName = function(){
//         return this.firstName + ' ' + this.lastName
//     }
//     let obj = {}
//     obj.firstName = "aman"
//     obj.lastName = "muhammad"
//     return obj
// }
// var person = new person("aman1","muhammad1")
// console.log(person)

// return a primitive data type like string, number, bigint, 
// boolean, and symbol it is ignored and this is returned
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.displayName = function() {
//       return this.firstName + ' ' + this.lastName;
//     };

//     return '10';
//   }

//   var person = new Person('Carmen', 'Sayid');
//   console.log(person);



// Person {firstName: "Carmen", lastName: "Sayid", displayName: ƒ}

// Constructor Example

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.displayName = function() {
//     return this.firstName + ' ' + this.lastName;
//   };
// }

// function Car(make, model, owner) {
//   this.make = make;
//   this.model = model;
//   this.owner = owner;
// }

// let Carmen = new Person('Carmen', 'Sayid');
// let Polly = new Person('Polly', 'Pipe');

// var Jeep = new Car('Jeep', 'Compass Sport', Carmen);
// var Nissan = new Car('Nissan', '300ZX', Polly);

// console.log(Jeep.owner.displayName());
// console.log(Nissan.owner.displayName());

