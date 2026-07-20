import React, { useState } from 'react'
import Login from './Login'
import Logout from './Logout'

const User = () => {
    // let user=false
    const [click,setclick]=useState(true)
  return (
    <div>
        {/* {user?<Login/>:<Logout/>} */}
        <h2>{click?<Login/>:<Logout/>}</h2>
        <button onClick={()=>setclick(!click)}>click</button>
    </div>
  )
}

export default User