import React, { createContext, useState } from "react";
import Final from "./Final";

export const a=createContext()
const Themecontext = () => {
  const [theme, setTheme] = useState("light")
  const setsTheme=()=> {
    setTheme((prevTheme)=>prevTheme=== "light" ? "dark" : "light");
  };

  return (
    <a.Provider value={{ theme,setsTheme }}>
      <Final/>
    </a.Provider>
  )
}
export default Themecontext