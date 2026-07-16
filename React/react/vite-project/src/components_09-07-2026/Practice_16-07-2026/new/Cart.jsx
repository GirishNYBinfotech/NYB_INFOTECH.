import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "./cartSlice";


function Cart() {

  const items = useSelector(state => state.cart.items);

  const dispatch = useDispatch();

  return (

    <div>

      <h2>Shopping Cart</h2>

      {items.map(item => (

        <div key={item.id}>

          {item.name}

          <button
            onClick={() => dispatch(removeItem(item.id))}
          >
            Remove
          </button>

        </div>

      ))}

    </div>

  );
}

export default Cart;