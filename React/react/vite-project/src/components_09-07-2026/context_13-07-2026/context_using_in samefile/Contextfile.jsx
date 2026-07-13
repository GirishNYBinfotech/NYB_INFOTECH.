import React, { createContext } from 'react'
import Subcontext from './Subcontext'

export let context1=createContext()
const Contextfile = () => {
    let obj={
        name:"Girish"
    }
  return (
    <div>
        <context1.Provider value={obj}>
            <Subcontext/>
        </context1.Provider>
    </div>
  )
}

export default Contextfile