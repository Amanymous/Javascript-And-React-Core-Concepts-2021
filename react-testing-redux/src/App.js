import logo from './logo.svg';
import './App.css';

function App({title}) {
  return (
    <div data-test="component-app">
     <h1 data-test="counter-display">Display the counter</h1>
     <button data-test="increment-button">Increment counter</button>
    </div>
  );
}

export default App;
