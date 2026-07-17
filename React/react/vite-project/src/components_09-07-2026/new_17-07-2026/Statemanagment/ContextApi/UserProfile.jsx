import { useContext } from "react";
import { UserContext } from "./UserProvider";


function UserProfile() {
  const { user, setUser }=useContext(UserContext);
  return (
    <div>
      <h2>User: {user}</h2>

      <button onClick={()=>setUser("king")}>Change UseR</button>
    </div>      
  );
}

export default UserProfile;