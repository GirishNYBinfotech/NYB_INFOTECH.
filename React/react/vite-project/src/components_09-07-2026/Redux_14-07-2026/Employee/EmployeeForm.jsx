import { useContext, useState } from "react";
import { EmployeeContext } from "./EmployeeProvider";

function EmployeeForm() {
  const { addEmployee } = useContext(EmployeeContext);

  const [name, setName] = useState("");

  console.log("EmployeeForm Rendered");

  const handleAdd = () => {
    const employee = {
      id: Date.now(),
      name,
    };

    console.log("---------------------------");
    console.log("User Clicked Add");
    console.log("Employee Created:", employee);

    addEmployee(employee);

    setName("");
  };

  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleAdd}>
        Add Employee
      </button>
    </>
  );
}

export default EmployeeForm;