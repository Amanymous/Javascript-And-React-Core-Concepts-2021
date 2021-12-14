// closure
// const add = (function (){
//     let counter = 0
//     console.log(counter)
//     return function(){
//         counter+=1
//         console.log(counter)
//         return counter
//     }
// })()
// add()

// IIFEss
// (function(name){
//     console.log("hi",name)
// }('muhammad aman mirza'))

// this keyword

// function SomeFunction(callback){
//     const my1 = 200
//     callback()
// }
// let obj = {
//     my1 : 300,
//     WhoIsThis:function(){
//         console.log("'this' point to " + this +", my1:" + this.my1)

//     }
// }
// SomeFunction(obj.WhoIsThis)
// SomeFunction(obj.WhoIsThis.bind(obj))

// Prototypal inheritance
// let animal = {
//     eats:true
// }
// let rabbit = {
//     jumps:true
// }
// // console.log(rabbit.__proto__ = animal)
// console.log(animal.__proto__ = rabbit)
// console.log("Animal:",animal," and Rabbit:",rabbit)

// event loop
// function task(mes){
//     let n = 1000000000
//     while(n>0){
//         n--
//     }
//     console.log(mes)
// }
// console.log("start scripting")
// task('downloading')
// console.log('done')

// single thread
// console.log('first')
// setTimeout(()=>{
//     console.log('second')
// },1000)
// console.log('third')

// for each
// let arr = [10,100,500,20,35]
// arr.forEach(item=>{
//     setTimeout(()=>console.log(item),item)
// })

// callback
// function addString(previous,current,callback){
//     setTimeout(()=>{
//         callback((previous + '' + current))
//     },
//     Math.floor(Math.random() * 100) + 1)
// }

// function addAll(){
//     addString('','A',result=>{
//         addString(result,'B',result=>{
//             addString(result,'C',result=>{
//                 console.log(result)
//             })
//         })
//     })
// }
// addAll()

// await promises
// function addString(previous, current){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(previous + ' ' + current)
//         },
//         Math.floor(Math.random()*100)+1)
//     })
// }
// async function addAll(){
//     let toPrint = await addString('','A')
//     toPrint = await addString(toPrint, 'B')
//     toPrint = await addString(toPrint, 'C')
//     console.log(toPrint)

// }
// addAll()

//bad practice

function addUserService(db,user){
  if(!db) {
    if(!db.isConnected()){
      if(!user){
        return db.insert("user",user)
      } else{
        throw new Error("No user")
      }
    }
     else{
        throw new Error("No database connection")
      }
  } else{
    throw new Error("No database")
  }
}

//good practice
function addUserService(db,user){
  if(!db) throw new Error("No database")
  if(!db.isConnected()) throw new Error("No database connection")
  if(!user) throw new Error("No user")
  return db.insert("user",user)
}

