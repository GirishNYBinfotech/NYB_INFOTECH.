import React from "react";
import Context from "./Context";
import Context2 from "./Context2";


function Context1() {
  const a = {
    name: "Girish",
  };

  return (
    <Context.Provider value={a}>
      <Context2 />
    </Context.Provider>
  );
}

export default Context1;