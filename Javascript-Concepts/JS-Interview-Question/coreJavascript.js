
/**
 * @hoisting
 * isme variable function ko ager top ma use karin gy 
 * to error gega exaple
 * const getName=()=>{} you can also use var or let
 */
// getName()
// console.log(x)
// var x = 9

// function getName2(){

// }
// function getName(){
//     console.log("hi js")
// }
// console.log(x)

/**
 * @How_functions_work_in_JS_and_Variable_Environment
 * 
 */
// var x = 1
// a()
// b()
// // console.log(x)

// function a(){
//     var x = 10
//     console.log(x)
// }

// function b(){
//     var x = 100
//     console.log(x)
// }
// console.log(window.x)

/**
 * @undefined_vs_not_defined_in_JS
 * @undefined means value has not been given but memory is allocated
 * @NotDefined means memory is not allocated
 * @javascript is loosely type language
 * 
 */

// var a = 7

// console.log(a)
// if(a === undefined){
//     console.log('a is undefined')
// }
// else{
//     console.log('a is not undefined')
// }

// var a;
// console.log(a)
// a=10
// console.log(a)
// a = 'hello world'
// console.log(a)

// a = undefined
// not a good practice a = undefined
// console.log(a)

/**
 * @The_Scope_Chain_Scope_Lexical_Environment
 * @Scope means where you can acess a specfic function or a
 * variable in your code and scope is directly dependent on 
 * lexical enviornment
 * when ever execution context is created lexical enviornment is 
 * also created means c() is lexically inside in a() and a()
 * is lexically inside global scope
 * lexical means local memory along with it's parent 
 * so lexical parent of c() is a() and a() lexical parent is
 * global execution context and global execution context 
 * memory is lexical enviornment and its memory is null
 * all these lexical enviornment and parent chain is know
 * as scope chain
 * local memory and lexical enviornment of parent all these 
 * thing called scope chain
 */

// function a(){
// var b =10
// console.log(b)
// c()
// function c(){
// console.log(b)
// }
// }

// a()

/**
 * @let_const_in_JS_Temporal_Dead_Zone
 * @let in let we can not re declearation or duplicate
 * you can not use in a same scope again
 * @const is even more strict then let you have to
 * initialize in the same in declearation line 
 * example: const b = 1000
 * @TypeError 
 */

// let a =10
// console.log(a)
// var b = 100

// let a =1;
// const b = 1000
// console.log(b)

// a = 10
// console.log(a)

/**
 * @BLOCK_SCOPE_Shadowing_in_JS
 * @block is define by {} also called compound statement
 * it is also used to combine multiple javascript 
 * statement into 1 group single statement @Example
 * if(true){ var a=10
 * console.log(a)
 * }
 * @BLOCK_SCOPE let and const are block scope because
 * they reserve in a seperate memory state
 * @Shadowing in var we reassign same variable 
 * it will not change in log because var is in a global scope
 * it also do the same in function because lexical scope 
 * follow block scope
 * also same rule applies in arrow function
 */

// {
//     var a = 10
//     let b = 20
//     const c = 30
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// console.log(a)
// console.log(b)
// console.log(c)

// shodowing
// var a = 100
// let b = 200
// const c = 300
// {
//     var a = 10
//     let b = 20
//     const c = 30
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// console.log(a)
// console.log(b)
// console.log(c)

// var a = 20
// {
//     let a = 11
//     console.log(a)
// }
// console.log(a)

// let a = 20
// function x(){
//     var a = 11
//     console.log(a)
// }
// x()
// console.log(a)

/**
 * @Closures_in_JS
 * A lexical scope in JavaScript means that a
 * variable defined outside a function can be
 * accessible inside another function defined
 * after the variable declaration. But the 
 * opposite is not true; the variables defined 
 * inside a function will not be accessible 
 * outside that function.
 * 
 * function along with lexical scope bundle is called closure
 * @Uses_of_closure
 * Module design pattern
 * Currying
 * Function line once
 * Memoixe
 * Maintaining state in sync world
 * Maintaining state in async world
 * setTimeouts
 * Iterators
 * and many more
 */

// function x(){
//     var a = 9
//     function y(){
//         console.log(a)
//     }
//     // y() //both are same
//     return y
// }
// var z = x()
// console.log(z)
// z()

// both are same

// function x(){
//     var a = 9
//     return function y(){
//         console.log(a)
//     }
// }
// var z = x()
// console.log(z)
// z()

// function x(){
//     var a = 9
//     a = 99
//     return function y(){
//         console.log(a)
//     }
// }
// var z = x()
// console.log(z)
// z()

// function x(){
//     var a = 9

//     function y(){
//         console.log(a)
//     }
//     a = 99
//     return y
// }
// var z = x()
// console.log(z)
// z()

// function z(){
//     var b = 900
//     function x(){
//         var a = 9

//         function y(){
//             console.log(a,b)
//         }
//         a = 99
//         y()
//     }
//     x()
// }
// z()

/**
 * @setTimeout_plus_Closures_Interview_Question
 * 
 */

// function x(){
//     var i =1
//     setTimeout(function (){
//       console.log(i)  
//     },3000)
//     console.log("javascript")
// }
// x()

// function x() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i)
//         }, 1*1000)
//     }

//     console.log("javascript")
// }
// x()

// function x() {
//     for (var i = 1; i <= 5; i++) {
//         function close(x){
//             setTimeout(function () {
//                 console.log(x)
//             }, x * 1000)
//         }
//         close(i)
//     }

//     console.log("javascript")
// }
// x()

/**
 * @FIRST_CLASS_FUNCTIONS_Anonymous_Functions
 */


// function statement aks function deleration

// function a(){
//     console.log('function statement')
// }

// function expression

// var b = function (){
//     console.log('function expression')
// }
// a()
// b()

// anonymous functions
// function (){
// you canuse them as a variable just like function expression
// }

// Name function expression
// const getRectArea = function(width, height) {
//     return width * height;
//   };

//   console.log(getRectArea(3, 4));

// difference between arguments and parameters

// function y(param1,param2){
//     console.log("arguments and parameters:",param1,param2)
// }
// y(1,2)

// first class function aka first class citizens
// means ability to be used like values

// const Arithmetics = {
//     add:(a, b) => {
//         return `${a} + ${b} = ${a+b}`;
//     },
//     subtract:(a, b) => {
//         return `${a} - ${b} = ${a-b}`
//     },
//     multiply:(a, b) => {
//         return `${a} * ${b} = ${a*b}`
//     },
//     division:(a, b) => {
//         if(b!=0) return `${a} / ${b} = ${a/b}`;
//         return `Cannot Divide by Zero!!!`;
//     }

// }

// console.log(Arithmetics.add(100, 100));
// console.log(Arithmetics.subtract(100, 7));
// console.log(Arithmetics.multiply(5, 5));
// console.log(Arithmetics.division(100, 5));

// arrow function
// const z=()=>{
//     console.log('arrow function')
// }
// z()

/**
 * @Callback_Functions_in_JS_ft_Event_Listeners
 */

// what is a callback function in js
// setTimeout(function (){
//     console.log("Timer")
// },5000)

// function x(y){
//     console.log("x")
//     y()
// }
// x(function y(){
//     console.log("y")
// })

// js is synchronous and single-thread

// block the main thread

// power of callbacks

// deep about event listners

// closures demo with event listeners
// function attachEventListeners() {
//     let count = 0
//     function attach() {
//         document.getElementById("clickMe").addEventListener("click", function abc() {
//             console.log("button clicked", count++)
//         })
//     }
//     attach()
// }
// attachEventListeners()
// scope demo with event listeners

// garbage collection and removeEventListeners

/**
 * @Higher_Order_Functions_ft_Functional_Programming
 * here we also use @DRY don't repeat yourself
 */

// const radius = [3,2,4,5]

// const area = function(radius){
//     return Math.PI * radius * radius
// }

// const circumference = function (radius){
//     return 2 * Math.PI * radius * radius
// }

// const diameter = function (radius){
//     return 2 * radius
// }

// const calculate = function(radius,logic){
//     const output = []
//     for (let i = 0; i<radius.length; i++){
//         output.push(logic(radius[i]))
//     }
//     return output
// }
// console.log(calculate(radius,area))
// console.log(calculate(radius,circumference))
// console.log(calculate(radius,diameter))

// const radius = [3,2,4,5]

// const area = function(radius){
//     return Math.PI * radius * radius
// }

// const circumference = function (radius){
//     return 2 * Math.PI * radius * radius
// }

// const diameter = function (radius){
//     return 2 * radius
// }

// Array.prototype.calculate = function(logic){
//     const output = []
//     for (let i = 0; i<this.length; i++){
//         output.push(logic(this[i]))
//     }
//     return output
// }

// console.log(radius.map(area))
// console.log(radius.calculate(area))
// console.log(radius.calculate(circumference))
// console.log(radius.calculate(diameter))

/**
 * @map_filter_reduce
 */

// const arr = [1,2,3,4,5,6,7,8,9]

/**@Map */

// function double(x){
//     return x*2
// }

// function binary(x){
//     return x.toString(2)
// }

// const output = arr.map(binary)
// const output = arr.map(function binary(x){
//     return x.toString(2)
// })

// const output = arr.map((x)=>x.toString(2))
// const output = arr.map((x)=>x*2)
// console.log(output)

/**@filter */

// const arr = [1,2,3,4,5,6,7,8,9]
// function greaterThan4(x){
//     return x > 4
// }
// const output = arr.filter(greaterThan4)

// const output = arr.map(function isEven(x){
//     return x > 4
// })

// const output = arr.filter((x)=> x > 4)
// console.log(output)

/**@reduce */
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function findSum(arr){

//     let sum = 0 
//     for (let i = 0; i< arr.length; i++){
//         sum = sum + arr[i]
//     }
//     return sum
// }
// console.log(findSum(arr))

// const output = arr.reduce(function (acc,curr){
//     acc = acc +curr
//     return acc
// },4)
// console.log(output)

// function findMax(arr){

//     let max = 10 
//     for (let i = 0; i< arr.length; i++){
//         if(arr[i]>max){
//             max = arr[i]
//         }
//     }
//     return max
// }
// console.log(findMax(arr))

const output = arr.reduce(function (max, curr) {
    if (curr > max) {
        max = curr
    }
    return max           
},10)
console.log(output)
