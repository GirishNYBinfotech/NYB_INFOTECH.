import React from 'react'
import Maincontext from '../../components_09-07-2026/Authentication_10-07-2026/Maincontext'
import Home from '../../components_09-07-2026/Authentication_10-07-2026/Home'
import Navbar from '../../components_09-07-2026/Authentication_10-07-2026/Navbar'


function Authenticationpage() {
  return (
    <div>
        <Maincontext>
            <Home/>
            <Navbar/>
        </Maincontext>
    </div>
  )
}

export default Authenticationpage