import React from 'react'
import Context1 from '../../components_09-07-2026/Practice_16-07-2026/ContextApi/Context1'
import CartProvider from '../../components_09-07-2026/Practice_16-07-2026/ContextApi/cart/CartProvider'
import Navbar from '../../components_09-07-2026/Practice_16-07-2026/ContextApi/cart/Navbar'
import Product from '../../components_09-07-2026/Practice_16-07-2026/ContextApi/cart/Product'
import Greet from '../../components_09-07-2026/Practice_16-07-2026/ContextApi/Languages/Greet'
import Provider from '../../components_09-07-2026/Practice_16-07-2026/ContextApi/Languages/Provider'
import UserProvider from '../../components_09-07-2026/Practice_16-07-2026/ContextApi/Login/UserProvider'
import Login from '../../components_09-07-2026/Practice_16-07-2026/ContextApi/Login/Login'
import UserProviders from '../../components_09-07-2026/Practice_16-07-2026/ContextApi/input/UserProviders'
import UserInput from '../../components_09-07-2026/Practice_16-07-2026/ContextApi/input/UserInput'


function Contextspages() {
  return (
    <div>
        <h2>Add to cart</h2>
        <CartProvider>
          <Navbar/>
          <Product/>
        </CartProvider>

        <h2>language</h2>
        <Provider>
           <Greet/>
        </Provider>

        <h2>Login</h2>
        <UserProvider>
          <Login/>
        </UserProvider>

        <h2>Input</h2>
        <UserProviders>
          <UserInput/>
        </UserProviders>
       
    </div>
  )
}

export default Contextspages