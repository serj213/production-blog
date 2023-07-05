import { useState } from "react";
import s from './Counter.module.scss'
// import './Counter.scss'

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(prev => ++prev)
  }

  return <div>
    <h1 className={s.title}>{counter}</h1>
    <button onClick={increment}>
        increment
    </button>
  </div>;
};
