import { useContext } from "react";
import UserContext from "./UserContext";


function Login() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>User:{user.name}</h2>
      <button onClick={() =>setUser({ name:"Girish" })}>Login</button>
    </div>
  );
}

export default Login;