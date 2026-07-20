import React from "react";

function Ifelse() {
  const isLoggedIn=false;

  if (isLoggedIn) {
    return <h3>Welcome User</h3>
  } 
  else{
    return <h3>Please Login</h3>
  }
}

export default Ifelse;