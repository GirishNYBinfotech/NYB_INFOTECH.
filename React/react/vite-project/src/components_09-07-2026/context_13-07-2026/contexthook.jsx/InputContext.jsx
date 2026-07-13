import React, { useContext } from "react";
import UserContext from "./UserContext";

function InputContext() {
  const { name, setName } = useContext(UserContext);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />
    </div>
  );
}

export default InputContext