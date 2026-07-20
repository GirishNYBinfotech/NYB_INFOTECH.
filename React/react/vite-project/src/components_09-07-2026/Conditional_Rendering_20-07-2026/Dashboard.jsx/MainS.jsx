import React, { useState } from "react";
import Department from "./Department";
import Studnent from "./Studnent";
import Teachers from "./Teachers";

const MainS=()=>{
  const [user, setUser] = useState("")
  let outcome
  switch(user){
    case "Department":
      outcome = <Department />;
      break;

      case "Student":
        outcome=<Studnent/>
        break;

        case "Teachers":
            outcome=<Teachers/>
            break;

            default:
                outcome=<h2>Please select a page</h2>;
  }

  return (
    <div>
        <h2>{outcome}</h2>
      <button onClick={()=>setUser("Department")}>Department</button>
      <br/>
      <br/>
      <button onClick={()=>setUser("Student")}>Student</button>
      <br/>
      <br/>
      <button onClick={()=>setUser("Teachers")}>Teachers</button>
    </div>
  );
};

export default MainS;