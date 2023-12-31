import React, {useState} from "react";
import './App.css';

import FComponent from './FComponent';


function App() {
  const [counter, setCounter]=useState(0);
  const increment =()=>{
    setCounter(counter +1);
  };
  const decrement=()=>{
    setCounter(counter -1);
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>App Component</h2>
      <h3>{counter}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>

      <FComponent counter={counter}/>
      
    </div>
  );
}

export default App;
