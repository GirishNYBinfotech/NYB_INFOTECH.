import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteEmployee } from "./employeeSlice";

function EmployeeList() {
  const employees = useSelector(state => state.employee.employees)
  const dispatch=useDispatch()
  return (

    <div>
      <h2>Employee List</h2>
      {
        employees.map(emp => (
          <div key={emp.id}>
            <p>{emp.name}|{emp.department}|RS:{emp.salary}</p>
            <button onClick={()=>dispatch(deleteEmployee(emp.id))}>Delete</button>
          </div>
        ))
      }
    </div>

  );
}

export default EmployeeList;