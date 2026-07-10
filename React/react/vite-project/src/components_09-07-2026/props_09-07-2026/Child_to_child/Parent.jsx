import { useState } from "react";
import Child from "./Child";
import Child2 from "./Child2";

function Parent() {
  const [message, setMessage] = useState("");

  
  const receiveData=(data)=>{
    setMessage(data)
  }

  return (
    <div>
      <h2>Parent Component</h2>
      <Child sendData={receiveData} />
      <Child2 message={message} />
    </div>
  );
}

export default Parent;