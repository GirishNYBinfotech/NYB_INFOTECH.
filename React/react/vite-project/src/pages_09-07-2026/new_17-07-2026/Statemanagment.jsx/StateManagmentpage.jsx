import React from 'react'
import UserProvider from '../../../components_09-07-2026/new_17-07-2026/Statemanagment/ContextApi/UserProvider'
import UserProfile from '../../../components_09-07-2026/new_17-07-2026/Statemanagment/ContextApi/UserProfile'
import Cart from '../../../components_09-07-2026/new_17-07-2026/Statemanagment/UseReduserHook/Cart'
import Reduxpa from './Reduxpa'
import Themepages from './themepages'


const StateManagmentpage = () => {
  return (
    <div>
        <h2>ContextAPI</h2>
        <UserProvider>
            <UserProfile/>
        </UserProvider>
        <h2>Redux</h2>
        <Reduxpa/>
        <h2>Redux toolkit</h2>
          <Themepages/>
        <h2>usereduserhook</h2>
        <Cart/>
    </div>
  )
}

export default StateManagmentpage