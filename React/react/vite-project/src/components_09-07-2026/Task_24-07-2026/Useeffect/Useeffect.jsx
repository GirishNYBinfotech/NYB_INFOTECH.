import React, { useState, useEffect } from "react";

function User() {
  const [count, setCount] = useState(0);

  // 1. MOUNT
  useEffect(() => {
    console.log("Component Mounted")

    // 3. UNMOUNT
    return () => {
      console.log("Component Unmounted")
    }
  }, [])

  // 2. UPDATE
  useEffect(() => {
    if (count > 0) {
      console.log("Component Updated, Count =", count)
    }
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
    </div>
  );
}
function Useeffect() {
  const [show, setShow] = useState(true)

  return (
    <div>
      <h1>useEffect Lifecycle Example</h1>
      <button onClick={() => setShow(!show)}>{show ? "Unmount User" : "Mount User"}</button>
      {show && <User />}
    </div>
  );
}

export default Useeffect
