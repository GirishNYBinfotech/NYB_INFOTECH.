import React from "react";

function Ifelse() {
  const isdisplayed= true;

  if (isdisplayed) {
    return <h2>Displayed</h2>;
  } else {
    return <h2>not Displayed</h2>;
  }
}

export default Ifelse