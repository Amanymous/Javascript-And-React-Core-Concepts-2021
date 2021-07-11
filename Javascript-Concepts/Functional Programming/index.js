// let composition = function (f, g) {
//     return function (x) {
//         return f(g(x))
//     };
// };
// let add = function (num) {
//     return num + 10;
// }
// let multiply = function (num) {
//     return num * 10
// }

// let ans = composition(multiply, add)

// console.log(ans(5)) // (5+10*10===150)

// function Currying

// function curry(f){
//     return function(a){
//         return function(b){
//             return f(a,b)
//         }
//     }
// }
// function sum(a,b){
//     return a+b
// }
// let curriedSum = curry(sum)
// console.log(curriedSum(1)(2))

// Advanced curry implementation

// function curry(func) {

//     return function curried(...args) {
//         if (args.length >= func.length) {
//             return func.apply(this, args);
//         } else {
//             return function (...args2) {
//                 return curried.apply(this, args.concat(args2));
//             }
//         }
//     };

// }

// function sum(a, b, c) {
//     return a + b + c;
// }

// let curriedSum = curry(sum);

// console.log(curriedSum(1, 2, 3)); // 6, still callable normally
// console.log(curriedSum(1)(2, 3)); // 6, currying of 1st arg
// console.log(curriedSum(1)(2)(3)); // 6, full currying

// Higher Order Function

// function even(a){
//     if(a%2 == 1){
//         console.log("odd")
//     }else{
//         console.log("even")    }
// }
// even(12)

// const isEven = (n)=>{
//     return n % 2 == 0;
// }
// let printMsg = (evenFunc,num)=>{
//     const isNumEven = evenFunc(num)
//     console.log(`the number ${num} is even number: ${isNumEven}`)
// }
// printMsg(isEven,3)

// const numbers = [28, 77, 45, 99, 27];
 
// numbers.forEach(number => {  
//   console.log(number);
// }); 

// Array Method .filter()

// const randomNumbers = [4, 11, 42, 14, 39]
// const filterNumber = randomNumbers.filter(n=>{
//   return n > 12;
// })
// console.log(filterNumber)

// Array Method .map()
// const finalParticipants = ['Taylor', 'Donald', 
// 'Don', 'Natasha', 'Bobby'];

// const announce =finalParticipants.map(member=>{
//   return member + ' joined the contest.'
// })
// console.log(announce)

// Map,Filter and Reduce
// const numbers = [1,2,3,4]
// const double  = numbers.map(item=>item*2)
// console.log(double)

// const number = [1,2,3,4]
// const isEven = number.map(item => item%2 == 0)
// console.log(isEven)

// filter
// const students = [
//   { name: 'Quincy', grade: 96 },
//   { name: 'Jason', grade: 84 },
//   { name: 'Alexis', grade: 100 },
//   { name: 'Sam', grade: 65 },
//   { name: 'Katie', grade: 90 }
// ];
// const studentGrades = students.filter(student=>student.grade >= 90)
// console.log(studentGrades)

// const numbers = [1,2,3,4]
// const sum = numbers.reduce(function (result,item){
//   return result + item
// },99)
// console.log(sum)

var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

var petCounts = pets.reduce(function(obj, pet){
    if (!obj[pet]) {
        obj[pet] = 1;
    } else {
        obj[pet]++;
    }
    return obj;
}, {});

console.log(petCounts); 