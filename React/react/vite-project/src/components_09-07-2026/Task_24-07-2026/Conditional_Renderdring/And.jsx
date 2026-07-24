import React from "react";

function And() {
  const hasMessages=true
  return (
    <div>
      <h2>Dashboard</h2>
      {hasMessages && <h3>You have new messages</h3>}
    </div>
  )
}
export default And

