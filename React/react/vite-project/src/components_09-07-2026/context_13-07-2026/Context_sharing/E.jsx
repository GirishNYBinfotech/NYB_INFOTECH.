import { useContext } from "react";
import { a } from "./A";
// import MyContext from "./Mycontext";


function E() {
  const message= useContext(a);
  return (
    <div>
      <h2>E Component</h2>
      <h3>E Message:{message}</h3>
    </div>
  );
}

export default E;