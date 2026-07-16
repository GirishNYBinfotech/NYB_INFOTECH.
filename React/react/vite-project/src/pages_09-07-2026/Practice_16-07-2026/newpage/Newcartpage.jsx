import React from 'react'
import Login from '../../../components_09-07-2026/Practice_16-07-2026/new/Login'
import FoodList from '../../../components_09-07-2026/Practice_16-07-2026/new/FoodList'
import Cart from '../../../components_09-07-2026/Practice_16-07-2026/new/Cart'
import Checkout from '../../../components_09-07-2026/Practice_16-07-2026/new/CheckOut'
import UserProvider from '../../../components_09-07-2026/Practice_16-07-2026/new/UserProvider'
import store from '../../../components_09-07-2026/Practice_16-07-2026/new/store'
import { Provider } from 'react-redux'

const Newcartpage = () => {
  return (
    <div>
         <Provider store={store}>
      <UserProvider>
        <Login/>
        <hr />
        <FoodList />
        <hr />
        <Cart />
        <hr />
        <Checkout />
      </UserProvider>

    </Provider>
    </div>
  )
}

export default Newcartpage