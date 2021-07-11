// event loop
// function task(message){
//     let n = 10000000000;
//     while(n>0){
//         n--
//     }
//     console.log(message)
// }
// console.log('Start script...');
// task('Download a file.');
// console.log('Done!');

// console.log('start script')
// setTimeout(()=>{
//     task('download')
// },1000)
// console.log('done')

// console.log('Hi!');

// setTimeout(() => {
//     console.log('Execute immediately.');
// }, 0);

// console.log('Bye!');

// Single threaded
// console.log('first')
// setTimeout(()=>{
//     console.log('second')
// },1000)
// console.log('third')

// let arr = [10,100,500,20,35]

// arr.forEach(item=>{
//     setTimeout(()=>console.log(item),item)
// })

// callbacks,Promises and async-await

// function printString(string){
//     setTimeout(()=>{
//         console.log(string)
//     },1000)
// }
// printString(string='aman')



// function printAll(){
//     printString("A")
//     printString("B")
//     printString("C")
// }
// printAll()
// function printAll(){
//     printString("A", () => {
//       printString("B", () => {
//         printString("C", () => {})
//       })
//     })
//   }
//   printAll()

// function printString(string){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(string)
//             resolve()
//         },1000)
//     })
// }
// printString(string="aman")
// function printAll(){
//     printString("A")
//     .then(() => {
//       return printString("B")
//     })
//     .then(() => {
//       return printString("C")
//     })
//   }
//   printAll()

// function printAll(){
//     printString('a')
//     .then(()=>printString("b"))
//     .then(()=>printString("c"))
// }
// printAll()

// Await

// async function printAll(){
//     await printString("a")
//     await printString("a")
//     await printString("a")
// }
// printAll()

// callbacks

// function addString(previous, current, callback){
//     setTimeout(
//       () => {
//         callback((previous + ' ' + current))
//       }, 
//       Math.floor(Math.random() * 100) + 1
//     )
//   }

//   function addAll(){
//     addString('', 'A', result => {
//       addString(result, 'B', result => {
//         addString(result, 'C', result => {
//          console.log(result) // Prints out " A B C"
//         })
//       })
//     })
//   }
//   addAll()

// function addString(previous, current){
//     return new Promise((resolve, reject) => {
//       setTimeout(
//         () => {
//           resolve(previous + ' ' + current)
//         }, 
//         Math.floor(Math.random() * 100) + 1
//       )
//     })
//   }
//   function addAll(){  
//     addString('', 'A')
//     .then(result => {
//       return addString(result, 'B')
//     })
//     .then(result => {
//       return addString(result, 'C')
//     })
//     .then(result => {
//       console.log(result) // Prints out " A B C"
//     })
//   }
//   addAll()

// function addAll(){  
//     addString('', 'A')
//     .then(result => addString(result, 'B'))
//     .then(result => addString(result, 'C'))
//     .then(result => {
//       console.log(result) // Prints out " A B C"
//     })
//   }
//   addAll()

function addString(previous, current){
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          resolve(previous + ' ' + current)
        }, 
        Math.floor(Math.random() * 100) + 1
      )
    })
  }
  async function addAll(){
    let toPrint = await addString('', 'A')
    toPrint = await addString(toPrint, 'B')
    toPrint = await addString(toPrint, 'C')
    console.log(toPrint) // Prints out " A B C"
  }
  addAll()
  