import React from 'react'
import { useSelector } from 'react-redux'

function Header() {
    const cartItems = useSelector((state) => state.cart.items);
//     const state = useSelector((state) => state);

// console.log(state);
  return (
    <div>
        <h2>Cart (cartItems.length)</h2>
         {
        items.map(item=>(
          <p key={item.id}>{item.name}</p>
        ))
      }
    </div>
  )
}

export default Header