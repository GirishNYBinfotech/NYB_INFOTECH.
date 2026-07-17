import { useReducer } from "react";

const initialState = {
  items: []
};

function reducer(state, action) {

  switch (action.type) {
    case "ADD_ITEM":
      return {
        items: [...state.items, action.payload]
      };

    case "REMOVE_ITEM":
      return {
        items: state.items.slice(0, -1)
      };

    default:
      return state;
  }
}

function Cart() {
  const [state, dispatch] = useReducer(reducer,initialState)
  return (
    <>
      <button onClick={() =>dispatch({type: "ADD_ITEM",payload: "Laptop"})}>Add Laptop</button>
      <button onClick={() =>dispatch({type: "REMOVE_ITEM"})}> Remove Last</button>
      {state.items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </>
  );
}

export default Cart;