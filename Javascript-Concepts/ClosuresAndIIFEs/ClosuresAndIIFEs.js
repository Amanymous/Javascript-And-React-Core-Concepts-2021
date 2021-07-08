// Closures
let a = "hello world"
function greet(){
    console.log(a)
}
a = "Hello, Other World!"
// greet()

function fn(){
    let name="aman"
    function fn1(){
        console.log(name)
    }
    name="aman1"
    fn1()
}
// fn()

function funA(){
    let brand = "honda"
    function funB(){
        console.log(brand)
    }
    return funB
}
// funA()()

const add = (function () {
    let counter = 0;
    // console.log(counter)
    return function () {
        counter += 1;
        console.log(counter)
        return counter
    }
  })();
  
  add();
  add();
  add();

// IIFEs
(function(name){
    console.log("hi",name)
}("Muhammad Aman Mirza"))

