import React, { Component } from 'react'

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      counter:0,
      error:false  
    }
    // need to bind this for decrementCounter and incrementCounter, since they use
    // this.state and this.setState
    this.incrementCounter = this.incrementCounter.bind(this)
    this.decrementCounter = this.decrementCounter.bind(this)

  }

   // for challenge #3, I separated the incrementCounter onClick
   incrementCounter(){
  if(this.state.error){
    this.setState({ error: false })
  } 
  this.setState({ counter:this.state.counter+1 })
  }

  // for challenge #2, the behavior for decrement is complicated enough
  // that I separated the function from the jsx.
  decrementCounter(){
    if (this.state.counter === 0) {
      this.setState({ error: true });
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  }
  render() {
    const errorClass = this.state.error ? '' : 'hidden'
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
        <div className={`error ${errorClass}`}
        data-test="error-message"
        >The counter Cannot be below zero</div>
        <button data-test="increment-button"
        onClick={this.incrementCounter}
        >Increment</button>
        <button data-test="decrement-button"
        onClick={this.decrementCounter}
        >Decrement</button>
      </div>
    )
  }
}
export default App;