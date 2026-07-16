import React, { createContext } from "react";
import Usercontext from "./Usercontext";
import Context1 from "./Context1";


function Context() {
  const a = {
    name: "Girish",
  };

  return (
    <Usercontext.Provider>
        <Context1/>
    </Usercontext.Provider>
    );
}

export default Context;