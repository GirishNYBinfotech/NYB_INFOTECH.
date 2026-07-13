import React, { useState } from "react";
import UserContext from "./UserContext";
import InputContext from "./InputContext";
import DisplayContext from "./Displaycontext";


function Contexthook() {
  const [name, setName] = useState("");

  return (
    <UserContext.Provider value={{ name,setName }}>
      <h1>using Context</h1>
      <InputContext />
      <DisplayContext />
    </UserContext.Provider>
  );
}

export default Contexthook;