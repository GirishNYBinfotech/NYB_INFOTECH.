import React, { useState } from "react";
import UserContext from "./UserContext";
import Home from "./Home";


const UserProvider=() => {
  const [user, setUser]=useState("Girish");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Home/>
    </UserContext.Provider>
  )
}
export default UserProvider