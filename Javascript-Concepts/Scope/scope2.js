// 3. Function scope
function run(){
    var message = "yo ho"
    // console.log(message)
}
run()
// console.log(message)
// throw error due to function scope and var function doesnot work here

function run1(){
    const a = 2
    let count = 1;
    function run2() {}
    console.log(a)
    console.log(count)
    console.log(run2)
}
run1();
// console.log(a);   // throws ReferenceError
// console.log(count); // throws ReferenceError
// console.log(run2)

// 4. Module scope
const pi = 3.14159;

console.log(pi)

// 7. Lexical scope
function outerFunc(){
    let outervar  = 'from outside'
    function innerFunc(){
        let innervar  = 'from inside'
        console.log(outervar)
        console.log("from innerFunc:",innervar)
    }
    return innerFunc
}

// 8. Variables isolation
const inner = outerFunc()
inner();

function foo(){
    let count = 0;
    console.log(count)
}
function bar(){
    let count = 1
    console.log(count)
}
foo()
bar()