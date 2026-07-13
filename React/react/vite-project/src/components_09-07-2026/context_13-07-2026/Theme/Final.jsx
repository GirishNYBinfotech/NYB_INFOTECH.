import React, { useContext } from "react";
import { a } from "./Themecontext";


const Final=() => {
  const { theme,setsTheme } = useContext(a);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black"}}>


      <button onClick={setsTheme}>Change Theme</button>
    </div>
  );
};

export default Final