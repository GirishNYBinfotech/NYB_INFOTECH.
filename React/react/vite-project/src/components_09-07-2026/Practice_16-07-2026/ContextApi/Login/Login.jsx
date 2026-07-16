import React, { useContext } from "react";
import { UserContext } from "./UserProvider";

function Login() {
  const { user, setUser } = useContext(UserContext)
  return (
    <div>
      <h2>Welcome {user}</h2>
      <button onClick={() => setUser("Girish")}>Login</button>
      <button onClick={() => setUser("Guest")}>Logout</button>
    </div>
  );
}

export default Login;