import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "./CounterSlice";


function Counter() {
  const count = useSelector((state)=>state.count.count)
  const dispatch=useDispatch()
  return (
    <div>
      <h1>Redux Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
export default Counter;