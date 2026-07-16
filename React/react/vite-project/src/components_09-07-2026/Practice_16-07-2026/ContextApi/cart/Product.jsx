import React, { useContext } from "react";
import { CartContext } from "./CartProvider";

function Product() {
  const { addItem } = useContext(CartContext);

  return (
    <button onClick={addItem}>Add To Cart</button>
  )
}

export default Product;