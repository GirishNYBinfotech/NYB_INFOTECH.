import React from 'react'
import Mount from '../../../components_09-07-2026/UseEffect,map_21-07-2026/Useeffect/Lifecycle_useEffect/Mount'
import Update from '../../../components_09-07-2026/UseEffect,map_21-07-2026/Useeffect/Lifecycle_useEffect/Update'
import Unmount from '../../../components_09-07-2026/UseEffect,map_21-07-2026/Useeffect/Lifecycle_useEffect/Unmount'

const UseEffectpage=()=> {
  return (
    <div>
        <h3>Mount</h3>
        <Mount/>
        <h3>update</h3>
        <Update/>
        <h3>unmount</h3>
        <Unmount/>
    </div>
  )
}

export default UseEffectpage