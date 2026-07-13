import React, { createContext } from 'react'
import Navbar from './Navbar'

export let a=createContext()
function Auth(){
    let obj={
        loggedin:false
    }
  return (
    <div>
        <a.Provider value={obj}>
            <Navbar/>
        </a.Provider>
    </div>
  )
}

export default Auth