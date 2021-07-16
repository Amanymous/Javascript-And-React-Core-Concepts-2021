import React,{ useState,useRef,useReducer } from 'react'
import ReactDOM from 'react-dom';
import './index.css';
// Example #01
// const App = () => {
//     const [water,setOuncesWater] = useState(0)
//     const [coffee, setGramCoffee] = useState(0)
//     return (
//         <>
//         <h1>Coffee Maker</h1>
//         <span aria-hidden>☕</span>
//         <h2>Water</h2>
//         <button onClick={()=>setOuncesWater(water + 3)}>
//             {water} ounces
//         </button>
//         <h2>Coffee</h2>
//         <button onClick={()=>setGramCoffee(coffee + 2)}>
//             {coffee} gram
//         </button>
        
//         </>
//     );
// }

// export default App;

// Example #02
// const App = () => {
//     const [brew,setBrew] = useState({
//       water:9,
//       coffee:10
//     })
//     const water = ()=>{
//       setBrew({
//         water:brew.water+1,
//         coffee:brew.coffee
//       })
//     }
//     const coffee = ()=>{
//       setBrew({
//         water:brew.water,
//         coffee:brew.coffee+3
//       })
//     }
    
//       return (
//         <div>
//           <h1>Coffee</h1>
//           <span aria-hidden>☕</span>
//           <button onClick={coffee}>
//             {brew.coffee}
//           </button>
//           <h1>Water</h1>
//           <button onClick={water}>
//             {brew.water}
//           </button>
//         </div>
//     );
// }

// Example #03

// const App = () => {
//   const [brew,setBrew] = useState({
//     water:9,
//     coffee:10
//   })
//   const water = ()=>{
//     setBrew(brew=>({
//       ...brew,
//       water:brew.water+1
//     }))
//   }
//   const coffee = ()=>{
//     setBrew(brew=>({
//       ...brew,
//       coffee:brew.coffee+3
//     }))
//   }
  
//     return (
//       <div>
//         <h1>Coffee</h1>
//         <span aria-hidden>☕</span>
//         <button onClick={coffee}>
//           {brew.coffee}
//         </button>
//         <h1>Water</h1>
//         <button onClick={water}>
//           {brew.water}
//         </button>
//       </div>
//   );
// }

// Example #04
// const useCoffeeMaker =(coffee,water)=>{
//     const [state,setState] = useState({
//         coffee,water
//     })
//     const addWater = ()=>{
//         setState(state=>({
//             ...state,
//             water:state.water+1
//         }))}
//     const addCoffee = ()=>{
//         setState(state=>({
//             ...state,coffee:state.coffee+2
//         }))
//     }
//     return {
//         water:state.water,
//         coffee:state.coffee,
//         addWater,
//         addCoffee
//     }
    
// }
// const App=()=>{
//     const {water,coffee,addWater,addCoffee} = useCoffeeMaker(10,11)
//     return(
//         <div>
//             <h1>Coffee</h1>
//             <span aria-hidden>☕</span>
//             <button onClick={addCoffee}>{coffee}</button>
//             <h1>Water</h1>
//             <button onClick={addWater}>{water}</button>
//         </div>
//     )
// }

// Example #05

// const App=()=>{
//     const usernameRef = useRef()
//     const passwordRef = useRef()

//     console.log(`user name:${usernameRef} and password:${passwordRef}`)
//     const handleSubmit = (event)=>{
//         event.preventDefault()
//         console.log(usernameRef,passwordRef)
//         console.log(usernameRef.current.value,passwordRef.current.value)
//     }
//     return(
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="username">Username</label>
//             <input ref={usernameRef} id="username" />
//             <label htmlFor="password">Password</label>
//             <input ref={passwordRef} id="password"/>
//             <button type="submit">LogIn</button>
//         </form>
//     )
// }

// userReducer
const reducer = (state,reducer)=>{
    switch(action){
        case 'on':
            return true;
        case 'off':
            return false;
        default:
            return state
            
    }
}
const App=()=>{
    const [light,dispatch] = useReducer(reducer,true)
    return(
        <div className={`app${light ? 'lit' : 'unlit'}`}>
            <h1>Room</h1>
            <button onClick={()=>dispatch('on')}>ON</button>
            <button onClick={()=>dispatch('off')}>OFF</button>
        </div>
    )
}


ReactDOM.render(<App />, document.querySelector('#root'));
