// Prototypal inheritance
// let animal = {
//     eats:true
// }
// let rabbit = {
//     jumps:true
// }
// console.log(rabbit.__proto__ = animal)
// console.log(animal.__proto__ = rabbit)
// console.log("Animal:",animal," and Rabbit:",rabbit)

// let animal = {
//     eats:true
// }
// let rabbit = {
//     jumps:true
// }
// console.log(rabbit.__proto__ = animal)
// console.log(rabbit.eats)
// console.log(rabbit.jumps)

// let animal = {
//     eats:true,
//     walk(){
//         console.log("animal walk")
//     }
// }

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// }
// rabbit.walk()

// let animal = {
//     eats:true,
//     walk(){
//         console.log("animal walk")
//     }
// }

// let rabbit = {
//     jumps: true,
//     // __proto__: animal
// }
// let longEar = {
//     jumps:true,
//     __proto__: animal
// }
// longEar.walk()
// console.log(longEar.eats)

// Writing doesn’t use prototype

// let animal = {
//     eats: true,
//     walk(){

//     }
// }

// let rabbit  = {
//     __proto__:animal
// }
// rabbit.walk = function(){
//     console.log("rabbit and walk() function is empty")
// }
// rabbit.walk()

//   let str = "How are you doing today?";
//   const myArr = str.split();
//   console.log(myArr)

// let user = {
//     name: "John",
//     surname: "Smith",

//     set fullName(value) {
//         [this.name, this.surname] = value.split(" ");
//     },

//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     }
// };

// let admin = {
//     __proto__: user,
//     isAdmin: true
// };

// console.log(admin.fullName); // John Smith (*)

// // setter triggers!
// admin.fullName = "Alice Cooper"; // (**)

// console.log(admin.fullName); // Alice Cooper, state of admin modified
// console.log(user.fullName); // John Smith, state of user protected

// let animal ={
//   walk(){
//     if(!this.isSleeping){
//       console.log("walk")
//     }},
//     sleep(){
//       this.isSleeping = true
//   }
// }
// let rabbit = {
//   name :"white rabbit",
//   __proto__:animal
// }
// animal.sleep()
// rabbit.sleep()
// console.log(rabbit.isSleeping)
// console.log(animal.isSleeping)

// for…in loop

// let animal = {
//   eats:true
// }
// let parrot = {
//   fly:true
// }
// let rabbit = {
//   jumps:true,
//   __proto__:parrot,animal
// }
// console.log("object keys:",Object.keys(rabbit))
// for(let prop in rabbit) console.log(prop)

// let animal = {
//   eats:true
// }
// let rabbit = {
//   jumps:true,
//   __proto__:animal
// }

// for(let prop in rabbit){
//   let isOwn = rabbit.hasOwnProperty(prop)
//   if(isOwn){
//     console.log(`out:${prop}`)
//   }else{
//     console.log(`inherited:${prop}`)
//   }
// }

let animal = {
    jumps: null
  };
  let rabbit = {
    __proto__: animal,
    jumps: true
  };
  
  console.log( rabbit.jumps ); // ? (1)
  
  delete rabbit.jumps;
  
  console.log( rabbit.jumps ); // ? (2)
  
  delete animal.jumps;
  
  console.log( rabbit.jumps ); // ? (3)
  

