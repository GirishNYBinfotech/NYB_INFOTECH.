import { useContext } from "react";
import { EmployeeContext } from "./EmployeeProvider";

function EmployeeList() {
  const { employees } = useContext(EmployeeContext);

  console.log("EmployeeList Rendered");
  console.log("Employees Received:", employees);

  return (
    <>
      {employees.map((emp) => (
        <h3 key={emp.id}>{emp.name}</h3>
      ))}
    </>
  );
}

export default EmployeeList;