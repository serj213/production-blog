import { useState } from "react";
import './Counter.scss'

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(prev => ++prev)
  }

  return <div>
    <h1>{counter}</h1>
    <button onClick={increment}>
        increment
    </button>
  </div>;
};
