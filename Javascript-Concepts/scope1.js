const message = "aman"
// console.log(message)
if(true){
    const message = "Muhammad Aman Mirza"
}
// console.log(message)
// aman aman output is this i ahve already define aman

if(true){
    const game = "CS-GO"

}
// console.log(game)
// ERROR BECASUE MESSAGE IS NOT DEFINE IN OUTSIDE THE IF STATEMENT

// Block scope
if (true) {
    // "if" block scope
    const m = 'Hello';
    // console.log(m); 
    // 'Hello'
  }
// console.log(m); 
// throws ReferenceError

for (const color of ['green','red','blue']){
    const greet = 'Hi'
    // console.log(` greet:${greet} and  color:${color}`)
}
// console.log(` greet:${greet} and  color:${color}`)
// it will through error here because it is block scope in for loop

while(true){
    const abc = "hi"
    // console.log(abc)
}

if (true) {
    // "if" block scope
    var count = 0;
    // console.log(count); // 0
  }
// console.log(count); // 0
// var is not a block scope