import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [message, setMessage] = useState("No message received");

  const receiveData = (data) => {
    setMessage(data);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <h3>{message}</h3>

      <Child sendData={receiveData} />
    </div>
  );
}

export default Parent;