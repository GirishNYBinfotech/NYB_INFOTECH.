import React, { createContext, useState } from "react";

export const CartContext = createContext()
function CartProvider({ children }) {
  const [count, setCount]=useState(0)

  const addItem=()=>{setCount(count+1)}
  return (
    <CartContext.Provider value={{ count, addItem }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;