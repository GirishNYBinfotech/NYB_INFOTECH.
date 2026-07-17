import React from "react";

function Child({ sendData }) {
  return (
    <button onClick={() => sendData("Hello Parent")}>Send</button>
  );
}

export default Child;