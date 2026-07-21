import React, { useEffect, useState } from "react";
import Lifecycle from "./Lifecycle";

function UseEffect() {
  const [showComponent, setShowComponent]=useState(true)
  return (
    <div>
      <h1>useEffect Lifecycle</h1>
      <button onClick={() => setShowComponent(!showComponent)}>{showComponent ? "Remove Component" : "Show Component"}</button>
      {showComponent && <Lifecycle />}
    </div>
  );
}

export default UseEffect