import React, { useReducer } from "react";
import reducer from "./reduscer";

const initialState = {
  count: 0,
};
function New() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>useReducer Example</h1>

      <h2>Count: {state.count}</h2>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <button onClick={() =>dispatch({type: "ADD_BY_VALUE",payload: 5,})}>Add 5</button>
    </div>
  );
}

export default New;