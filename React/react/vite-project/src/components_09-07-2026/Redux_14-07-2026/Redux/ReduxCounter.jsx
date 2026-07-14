// import React from "react";

// import { useSelector, useDispatch } from "react-redux";

// import {
//   increment,
//   decrement,
// } from "./Actions";

// function Counter() {

//   const count = useSelector((state) => state.count);

//   const dispatch = useDispatch();

//   return (
//     <div>

//       <h1>{count}</h1>

//       <button onClick={() => dispatch(increment())}>
//         Increment
//       </button>

//       <button onClick={() => dispatch(decrement())}>
//         Decrement
//       </button>

//     </div>
//   );
// }

// export default Counter;

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./Actions";



function ReduxCounter() {
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Redux</h2>

      <h1>{count}</h1>

      <button onClick={() => dispatch(increment())}>inc</button>

      <button onClick={() => dispatch(decrement())}>dec</button>
    </div>
  );
}

export default ReduxCounter;