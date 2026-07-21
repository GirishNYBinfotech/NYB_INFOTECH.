import React, { useEffect } from "react";

function Cleanup() {

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer running")
    }, 6000)

    return () => {
      clearInterval(timer);
      console.log("Timer stopped")
    }
  },[])
  return <h1>Timer Component</h1>;
}

export default Cleanup;