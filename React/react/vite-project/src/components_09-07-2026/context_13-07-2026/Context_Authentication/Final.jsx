import React, { useContext } from 'react'
import { a } from './Auth'

const Final=() => {
    let obj=useContext(a)
  return (
    <div>
        {obj.loggedin?<p>loggedin successful</p>:<p>please login</p>}
    </div>
  )
}

export default Final