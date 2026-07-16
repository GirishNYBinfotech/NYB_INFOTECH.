import React, { useContext } from "react";
import { UserContext } from "./UserProviders";


function UserInput() {
  const { user, setUser }=useContext(UserContext);

  return (
    <div>
      <h2>Enter Your Name</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={user}
        onChange={(e) => setUser(e.target.value)}/>
        <h2>Welcome, {user}</h2>
    </div>
  );
}

export default UserInput;