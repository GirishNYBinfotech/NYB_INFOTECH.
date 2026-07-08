import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [name, setName] = useState("");

  const receiveName = (value) => {
    setName(value);
  };

  return (
    <div>
      <h2>Parent Component</h2>

      <h3>Name: {name}</h3>

      <Child sendName={receiveName} />
    </div>
  );
}

export default Parent;