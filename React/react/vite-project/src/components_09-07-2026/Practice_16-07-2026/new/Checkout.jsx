import { useReducer } from "react";

const initialState = {
  address: "",
  phone: ""
};

function reducer(state, action) {

  switch (action.type) {

    case "ADDRESS":
      return {
        ...state,
        address: action.payload
      };

    case "PHONE":
      return {
        ...state,
        phone: action.payload
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

function Checkout() {

  const [state, dispatch] =
    useReducer(reducer, initialState);

  return (

    <div>

      <h2>Checkout</h2>

      <input
        placeholder="Address"
        value={state.address}
        onChange={(e) =>
          dispatch({
            type: "ADDRESS",
            payload: e.target.value
          })
        }
      />

      <br /><br />

      <input
        placeholder="Phone"
        value={state.phone}
        onChange={(e) =>
          dispatch({
            type: "PHONE",
            payload: e.target.value
          })
        }
      />

      <br /><br />

      <button
        onClick={() => dispatch({ type: "RESET" })}
      >
        Clear
      </button>

      <h4>Address : {state.address}</h4>
      <h4>Phone : {state.phone}</h4>

    </div>
  );
}

export default Checkout;