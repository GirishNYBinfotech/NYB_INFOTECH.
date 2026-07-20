import React from "react";

function Switch() {
  const role="admin"
  let message
  switch (role) {
    case "admin":
      message=<h3>Welcome Admin</h3>;
      break;
    case "user":
      message=<h3>Welcome User</h3>;
      break;
    case "guest":
      message=<h3>Welcome Guest</h3>;
      break;

    default:
      message=<h3>Unknown Role</h3>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      {message}
    </div>
  );
}

export default Switch;