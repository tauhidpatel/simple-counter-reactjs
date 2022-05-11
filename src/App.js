import './App.css';

import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  // function Decrement() {
  //   return setCount(count-1);
  // }
  function Decrement() {
    return setCount((prevCount) => {
      return prevCount - 1;
    });
  }

  function Increment() {
    return setCount((prevCount) => {
      return prevCount + 1;
    });
  }

  // function Increment() {
  //   return setCount(count+1);
  // }

  function Reset() {
    return setCount((prevCount) => {
      return (prevCount = 0);
    });
  }

  return (
    <div className="App">
      <h1 className="header">My Counter App</h1>
      <p className="count">{count}</p>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={Increment}>Increment</button>
    </div>
  );
}
