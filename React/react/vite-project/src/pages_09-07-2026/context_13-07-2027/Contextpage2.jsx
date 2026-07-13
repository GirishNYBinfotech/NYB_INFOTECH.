import React from 'react'
import UserProvider from '../../components_09-07-2026/context_13-07-2026/context_home_page/UserProvider'
import Home from '../../components_09-07-2026/context_13-07-2026/context_home_page/Home'


const Contextpage2 = () => {
  return (
    <div>
        <UserProvider>
          <Home/>
        </UserProvider>
    </div>
  )
}

export default Contextpage2