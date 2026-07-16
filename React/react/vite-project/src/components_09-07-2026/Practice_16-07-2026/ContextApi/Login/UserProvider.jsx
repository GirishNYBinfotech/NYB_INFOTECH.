import React, { createContext, useState } from "react";

export const UserContext=createContext()
function UserProvider({ children }) {
  const [user, setUser] = useState("Guest")

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;