import React, { useReducer } from "react";
import reducer from "./reducer";


const initialState = {
  cart: [],
};
function InitialState() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const laptop = {
    id: 1,
    name: "Laptop",
    price: 50000,
  };

  const mobile = {
    id: 2,
    name: "Mobile",
    price: 25000,
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      <button onClick={() =>dispatch({type: "ADD_TO_CART",payload: laptop,})}>Add Laptop</button>
      <button onClick={() =>dispatch({type: "ADD_TO_CART",payload: mobile,})}>Add Mobile</button>
      <button onClick={() =>dispatch({type: "REMOVE_FROM_CART",payload: 1,})}> Remove Laptop</button>
      <button onClick={() =>dispatch({type: "CLEAR_CART",})}> Clear Cart</button>
      <h2>Cart Items</h2>

      {state.cart.length === 0 ? (
        <h3>Cart is Empty</h3>
      ) : (
        state.cart.map((item) => (
          <div key={item.id}>
            <p>
              <b>{item.name}</b> - ₹{item.price}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default InitialState;