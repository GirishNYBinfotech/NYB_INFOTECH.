import React, { useState } from 'react'
import Context1 from './context1'

 function Context({children}) {
    let [a]=useState({
        name:"girish",
        email:"girish@example.com"
    })
  return (
    <Context1.Provider value={a}>
        <h3>this is context provider</h3>
      {children}
    </Context1.Provider>
  )
}
export default Context