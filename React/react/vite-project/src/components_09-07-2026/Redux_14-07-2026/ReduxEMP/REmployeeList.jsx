import { useSelector, useDispatch } from "react-redux";
import { deleteEmployee } from "./employeeSlice";

function REmployeeList() {

  console.log("📋 Redux EmployeeList Rendered");

  const employees = useSelector(
    (state) => state.employee.employees
  );

  console.log("Employees From Redux Store");
  console.log(employees);

  const dispatch = useDispatch();

  return (
    <div
      style={{
        border: "2px solid green",
        padding: "20px",
        marginTop: "20px"
      }}
    >
      <h2>Redux Employee List</h2>

      {
        employees.length === 0 ? (
          <h3>No Employees</h3>
        ) : (
          employees.map((emp) => (
            <div
              key={emp.id}
              style={{
                border: "1px solid gray",
                margin: "10px",
                padding: "10px"
              }}
            >
              <h3>{emp.name}</h3>

              <p>{emp.department}</p>

              <button
                onClick={() => {

                  console.log("--------------------------------");
                  console.log("Delete Button Clicked");

                  console.log("Dispatch deleteEmployee()");
                  console.log(emp.id);

                  dispatch(deleteEmployee(emp.id));

                }}
              >
                Delete
              </button>

            </div>
          ))
        )
      }

    </div>
  );

}

export default REmployeeList;