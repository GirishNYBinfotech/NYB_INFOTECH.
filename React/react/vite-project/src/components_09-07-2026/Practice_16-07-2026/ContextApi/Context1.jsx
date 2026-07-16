import React, { useContext } from "react";
import usercontext from "./Usercontext";



function Context1() {
  const b=useContext(usercontext);

  return (
    <div>
      {b.name}
    </div>
  );
}

export default Context1;