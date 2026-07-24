import React from "react";

function Switch() {
  const role = "admin";

  switch (role) {
    case "admin":
      return <h2>Welcome Admin</h2>;

    case "user":
      return <h2>Welcome User</h2>;

    case "guest":
      return <h2>Welcome Guest</h2>;

    default:
      return <h2>Invalid Role</h2>;
  }
}

export default Switch