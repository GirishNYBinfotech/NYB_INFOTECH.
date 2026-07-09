import { useState } from "react";
import Employeeform from "./Employeeform";
import Employeedetails from "./Employeedetails";
import List from "./List";

function Employeeinfo() {
  const [employee, setEmployee] = useState("No Employee");

  const employees = ["Ravi", "King", "Kiran", "Queen"];

  // Child to Parent
  const getEmployee = (name)=>{
    setEmployee(name);
  }

  return (
    <div>
      <h1>Employee Management</h1>

      {/* Parent to Child */}
      <Employeeform title="Select Employee" sendEmployee={getEmployee} />

      <hr />

      {/* Child to Child */}
      <Employeedetails employee={employee} />

      <hr />

      {/* Reusable Component */}
      <List heading="Employee List" items={employees} />
    </div>
  );
}

export default Employeeinfo;