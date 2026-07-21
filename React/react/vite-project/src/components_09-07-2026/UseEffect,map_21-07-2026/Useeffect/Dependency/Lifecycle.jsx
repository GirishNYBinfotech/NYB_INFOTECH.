import React, { useEffect, useState } from "react";

function Lifecycle() {
  const [count, setCount] = useState(0);

  // 1. MOUNT
  // Runs only when component is created
  useEffect(() => {
    console.log("Component Mounted");
  }, []);


  // 2. UPDATE
  // Runs when count changes
  useEffect(() => {
    console.log("Count Updated:", count);
  }, [count]);


  // 3. UNMOUNT
  // Cleanup runs when component is removed
  useEffect(() => {
    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  return (
    <div>
      <h2>Lifecycle Component</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Lifecycle