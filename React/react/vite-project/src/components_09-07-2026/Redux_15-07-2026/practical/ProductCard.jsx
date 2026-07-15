import React from 'react'
import { useDispatch } from 'react-redux'

const ProductCard = () => {
   const dispatch=useDispatch()
   const product=[{
    id:1,
    name:"laptop",
    price:50000
   },
   {
    id:2,
    name:"mobile",
    price:20000

   }]
  return (
    <div>
        <h2>{product.id}</h2>
        <h2>{product.price}</h2>
        <h2>{product.name}</h2>
        <button onClick={dispatch(addToCart(ProductCard))}>Add to cart</button>

    </div>
  )
}

export default ProductCard