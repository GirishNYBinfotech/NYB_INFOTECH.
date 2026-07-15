import { useSelector } from "react-redux";

function REmployeeCount() {

  console.log("🔢 Redux EmployeeCount Rendered");

  const employees = useSelector(
    (state) => state.employee.employees
  );

  console.log("Employee Count :", employees.length);

  return (

    <div
      style={{
        border: "2px solid blue",
        padding: "20px",
        marginTop: "20px"
      }}
    >

      <h2>Total Employees</h2>

      <h1>{employees.length}</h1>

    </div>

  );

}

export default REmployeeCount;