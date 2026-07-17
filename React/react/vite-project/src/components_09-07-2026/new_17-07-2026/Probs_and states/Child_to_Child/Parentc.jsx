import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Chils2";


function Parentc() {
  const [text, setText] = useState("");
  return (
    <>
      <Child1 setText={setText} />
      <Child2 text={text} />
    </>
  );
}

export default Parentc;