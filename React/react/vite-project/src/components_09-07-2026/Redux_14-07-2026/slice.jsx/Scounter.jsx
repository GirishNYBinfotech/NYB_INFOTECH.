import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./Slice";

function Scounter() {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Counter</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>

      <button onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
}

export default Scounter;