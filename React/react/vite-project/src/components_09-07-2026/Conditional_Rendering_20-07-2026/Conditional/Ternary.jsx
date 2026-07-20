import React from "react";

function Ternary() {
  const exists=true;

  return (
    <div>
      {exists ? <h3>Account exists</h3> : <h3>Account does not exist</h3>}
    </div>
  );
}

export default Ternary;