import React from "react";

function Child1({ setText }) {
  return (
    <button onClick={() => setText("Hello from Child1")}>Update</button>
  );
}

export default Child1;