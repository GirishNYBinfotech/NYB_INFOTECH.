import React from 'react'
import Auth from '../../components_09-07-2026/context_13-07-2026/Context_Authentication/Auth'
import Navbar from '../../components_09-07-2026/context_13-07-2026/Context_Authentication/Navbar'
import Final from '../../components_09-07-2026/context_13-07-2026/Context_Authentication/Final'


const Authenticationpage1 = () => {
  return (
    <div>
        <Auth>
            <Navbar/>
            <Final/>
        </Auth>
    </div>
  )
}

export default Authenticationpage1