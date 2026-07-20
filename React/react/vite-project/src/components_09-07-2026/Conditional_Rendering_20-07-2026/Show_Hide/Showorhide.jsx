import React, { useState } from "react";

function Message() {
  return <h2>Hello This component is visible.</h2>;
}
function Showorhide() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>Conditional Rendering</h1>
      <button onClick={()=>setShow(!show)}>click{show ? "Hide" : "Show"}</button>
      {show&&<Message/>}
    </div>
  );
}

export default Showorhide;