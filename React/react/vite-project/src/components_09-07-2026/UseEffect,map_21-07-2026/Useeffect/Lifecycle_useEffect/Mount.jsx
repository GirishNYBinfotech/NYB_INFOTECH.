import React, { useEffect, useState } from 'react'

const Mount = () => {
    const [count,setcount]=useState(0)
    useEffect(() => {
  console.log("Component mounted");
}, []);
}

export default Mount