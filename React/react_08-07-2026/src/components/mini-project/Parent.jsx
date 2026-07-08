import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent() {
  const [message, setMessage] = useState("No Message");

  const getData = (data) => {
    setMessage(data);
  };

  return (
    <>
      <h2>Parent Component</h2>

      <p>Message from Child1: {message}</p>

      <Child1 sendData={getData} />

      <Child2 text={message} />
    </>
  );
}

export default Parent;