import { createContext } from "react";
import B from "./B";
// import MyContext from "./Mycontext";

export let a=createContext()
function A() {
  const message="Hello from A Component";
  return (
    <a.Provider value={message}>
      <div>
        <h2>A Component</h2>
        <B/>
      </div>
    </a.Provider>
  );
}

export default A;