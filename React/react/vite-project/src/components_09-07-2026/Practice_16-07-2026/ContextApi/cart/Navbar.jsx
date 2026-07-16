import React, { useContext } from "react";
import { CartContext } from "./CartProvider";

function Navbar() {
  const { count } = useContext(CartContext)
  return <h2>Cart Items:{count}</h2>
}

export default Navbar