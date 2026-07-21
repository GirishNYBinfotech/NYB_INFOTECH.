import React, { useState } from 'react'
import { useEffect } from 'react';

const Update = () => {
    const [count,setcount]=useState(0)
    useEffect(() => {
  console.log("Count changed");
}, [count]);
  return (
    <div>
        {count}
        <button onClick={()=>setcount(count+1)}>update count</button>
    </div>
  )
}

export default Update