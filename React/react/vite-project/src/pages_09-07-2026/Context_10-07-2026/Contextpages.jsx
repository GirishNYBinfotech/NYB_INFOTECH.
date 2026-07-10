import React from 'react'
import MainContext from '../../components_09-07-2026/contextApi_10-07-2026/Maincontext'
import Parent from '../../components_09-07-2026/contextApi_10-07-2026/Parent'
import GrandChild from '../../components_09-07-2026/contextApi_10-07-2026/GrandChild'
import Child from '../../components_09-07-2026/contextApi_10-07-2026/Child'


function Contextpages() {
  return (
    <div>
        <MainContext>
            <Parent/>
            <GrandChild/>
            <Child/>
        </MainContext>
    </div>
  )
}

export default Contextpages