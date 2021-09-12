function Identity(firstName,lastName,age){
    this.firstName = firstName
    this.lastName = lastName;
    this.age = age;
    this.fullName = function(){
        return this.fullName + ' '+ this.lastName
    }
}
let identity = new Identity('alex','json',88)
console.log(identity)
console.log(identity.fullName())

// const arr = [1, 2, 3, 4]
// console.log(arr)

// console.log("array increment by 1:", arr.map((el) => el + 1))
// console.log("array container 1:", arr.map(() => 1))
// console.log("array container a:", arr.map(() => "a"))
// const number = [1, 2, 3, 4]
// console.log("sqrt", number.map(Math.sqrt))

// Promises


// getUser('facebook/amanmirza99', (user, error) => {
//     if (error) {
//         throw (error)
//     }
//     const userId = user.id
//     getFriends(userId, (friends, error) => {
//         if (error) {
//             throw (error)
//         }
//         const john = friends.find(//...)

//             getPosts(john, (posts, error) => {
//                 if (error) {
//                     throw (error)
//                 }
//                 const rencentPost = posts[0]
//                 getCommentsForPost(rencentPost, (comments, error) => {
//                     if (error) {
//                         throw (error)
//                     }
//                     displayComments(comments)
//                 })
//             })
// })
// })

// const myPromise = new Promise((resolve, reject) => {
//     if (true) {
//         setTimeout(() => {
//             resolve('google.com')
//         }, 1000)
//     } else {
//         reject('I have failed')
//     }
// })

// myPromise.then(value => value + '!!!!').then(newValue=>console.log(newValue)).catch(rejectValue=>console.log(rejectValue))

// fetch('https://jsonplaceholder.tyicode.com/todos/1').then(
//     response=> response.json()
//     // i have made mistake json api to catch error
// ).then(json=>console.log(json)).catch(error=>console.log("error found"))

// filter()
// const arr = [2,4,6,8,10]
// console.log("greater",arr.filter(el=>el> 4))
// console.log(arr)


// reduce()

// const r = [1,2,3,4,5]
// console.log(r.reduce((accumlator,currentElement)=>accumlator+currentElement,2))
// here accumlator is 2 and currentElement are item in array which will add
// in accumlator 1 by 1

// find()

// const f = [1,2,3,4,5]
// console.log(f.find(el=>el === 5))
// console.log(f.find(el=>el > 3))

// const p = [{id:1},{id:4},{id:7}]
// console.log(p.find(pl=>pl.id > 1))


// includes()


// const arr = [1,3,5,7,9]
// console.log("if number is in an array exist it return true else false:")
// console.log(arr.includes(9))
// console.log(arr.includes(2))

// const my = [{id:1},{id:2},{id:3}]
// const my = [1,2,3,4,8,9]
// console.log("In position 5 that 9 is exist or not",my.includes(9,5)) 

// const my = [{id:1},{id:2},{id:3}]
// const obj1 = {id:1}
// const obj2 = {id:2}
// // const obj3 = {id:3}

// console.log('obj1:',obj1,'obj2:',obj2)
// console.log('obj1 === obj2',obj1 === obj2)
// const obj3 = obj2
// console.log('obj3 === obj2',obj3 === obj2)
// console.log('obj2.id=',obj2.id=11)

// const o1 = {id:11}
// const o2 = {id:22}
// const o3 = {id:33}

// const all = [o1,o2,o3]
// console.log(all)
// console.log(all.includes(o1,1))

// Async Await

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => {
//         const firstUser = users[1]
//         console.log(firstUser)
//         return fetch(
//             'https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id
//         );
//     })
//     .then(response => response.json())
//     .then(posts => console.log(posts))

// const myAsyncFunction = async () => {

//     // by using this async keyword with in are async
//     // function we are now suddenly allow you to use
//     // the await keyword await pouses the function 
//     // execution until what is being awaited is 
//     // completed and comes back with a value

//     const userResponse = await fetch('https://jsonplaceholder.typicode.com/users')
//     // it will wait until the fetch value comes back
//     const users = await userResponse.json()
//     // now this method returns a promise which
//     // reslove a final json value of your users
//     // which cast to your const user
//     const secondUser = users[1]
//     console.log(secondUser)
//     const postsResponse = await fetch(
//         'https://jsonplaceholder.typicode.com/posts?userId=' + secondUser.id
//     )
//     const posts = await postsResponse.json()
//     console.log(posts)

// }
// console.log(myAsyncFunction)

// const myAsyncFunction = async () => {
//     try {
//         const usersResponse = await fetch(
//             'https://jsonplaceholder.typicode.com/users'
//         )
//         const users = await usersResponse.json()
//         const secondUser = users[1]
//         console.log(secondUser)
//         const postsResponse = await fetch(
//             'https://jsonplaceholer.typicode.com/posts?userId=' + secondUser.id
//         )
//         const posts = await postsResponse.json()
//         console.log(posts)

//     } catch (err) {
//         console.log("Error found")
//     }

// }

// Memoization

// function addTo80(n){
//     console.log("cache")
//     return n + 80
// }
// console.log('1',addTo80(4))
// console.log('2',addTo80(4))
// console.log('3',addTo80(4))

// it's returning same "cache" again after calling same value

// let cache = {}

// function memoizedAddTo90(n){
//     if(n in cache){
//         return cache[n]
//     } else{
//         console.log('cache')
//         cache[n] = n + 90
//         return cache[n]
//     }
// }

// console.log('1',memoizedAddTo90(5))
// here value is not changed so it is memoized
// console.log('2',memoizedAddTo90(5))

// it will return cache because value is change

// console.log('3',memoizedAddTo90(9))

// currying

const multiply = (a,b)=>a*b
console.log(multiply(3,5))

const curriedMultiply = (a)=>(b)=>a*b
console.log(curriedMultiply(9)(10))

const curriedMultiplyBy5 = curriedMultiply(5)
console.log(curriedMultiplyBy5(9))
