import React, { useContext } from "react";
import Context from "./Context";

function Context2() {
  const b = useContext(Context);

  return (
    <div>
      This is Context: {b.name}
    </div>
  );
}

export default Context2;