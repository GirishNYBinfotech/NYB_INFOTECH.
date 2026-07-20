import React from "react";

function LogicalAND() {
  const hasMessage=true;

  return (
    <div>
      <h3>Dashboard</h3>
      {hasMessage && <h3>You have a new message!</h3>}
    </div>
  );
}

export default LogicalAND;