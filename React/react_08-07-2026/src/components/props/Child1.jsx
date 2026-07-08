import React from 'react'

const Child1 = ({hi}) => {
  return (
    <div>Child1
        <button onClick={()=> hi("hello from child")}>click</button>
        
    </div>
  )
}

export default Child1