import React, { useState } from 'react'

import './App.css';

function App({ title }) {
  const [state, setState] = useState(0)
  const [error,setError] = useState(false)

  return (
    <div data-test="component-app">
      <h1 
      data-test="counter-display">
      Display the counter</h1>
      <span data-test="counter">{state}</span>
      <div 
      data-test="error-message"
      className={`error ${error ? '':'hidden'}`}>
        The counter cannot go below 0
      </div>
      <button 
      data-test="increment-button" 
      onClick={()=>{
        if(error){
          setError(false)
        }
        setState(state+1)
      }}>
      Increment counter
      </button>
      <button 
      data-test="decrement-button"
      onClick={()=>{
        if(state>0){
          setState(state-1)
        }else{
          setError(true)
        }
      }}>
        Decrement counter
      </button>

    </div>
  );
}

export default App;
