import React, { useContext } from 'react'
import  { context1 } from './Contextfile'

function Subcontext() {
    let obj=useContext(context1)
  return (
    <div>
        <h1>{obj.name} this is filecontext</h1>
    </div>
  )
}

export default Subcontext