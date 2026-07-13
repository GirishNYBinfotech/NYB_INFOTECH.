import React, { useContext } from "react";
import UserContext from "./UserContext";


const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h3>Welcome {user}</h3>
      <button onClick={()=>setUser("King")}>Change Name</button>
    </div>
  )
}

export default Profile;