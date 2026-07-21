import React from 'react'
import { useEffect } from 'react';

function Unmount() {
    useEffect (() => {
  console.log("Mounted")

  return () => {
    console.log("Unmounted/Cleanup")
  };
}, [])
}

export default Unmount