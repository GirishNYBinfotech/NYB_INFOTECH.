import { useState } from "react";

import { useDispatch } from "react-redux";

import { addEmployee } from "./employeeSlice";

function EmployeeForm() {

  console.log("📝 Redux EmployeeForm Rendered");

  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const [department, setDepartment] = useState("");

  const handleSubmit = () => {

    if (name === "" || department === "") {

      alert("Please Enter All Fields");

      return;

    }

    const employee = {

      id: Date.now(),

      name,

      department

    };

    console.log("====================================");

    console.log("👤 User Clicked Add");

    console.log("Employee Created");

    console.log(employee);

    console.log("Dispatching addEmployee Action");

    dispatch(addEmployee(employee));

    setName("");

    setDepartment("");

  };

  return (

    <div
      style={{
        border: "2px solid red",
        padding: "20px",
        marginBottom: "20px"
      }}
    >

      <h2>Redux Employee Form</h2>

      <input
        type="text"
        placeholder="Employee Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSubmit}>
        Add Employee
      </button>

    </div>

  );

}

export default EmployeeForm;