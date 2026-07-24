import React from "react";

function Ternary() {
  const isLoggedIn = false;

  return (
    <div>
      {isLoggedIn ? <h2>Welcome User</h2> : <h2>Please Login</h2>}
    </div>
  );
}

export default Ternary