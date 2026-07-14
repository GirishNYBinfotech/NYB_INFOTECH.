import { useContext } from "react";
import EmployeeContext from "./EmployeeContext";

function EmployeeList() {

    console.log("📋 EmployeeList Rendered");

    const { employees, deleteEmployee } = useContext(EmployeeContext);

    console.log("EmployeeList received employees:");
    console.log(employees);

    return (
        <div
            style={{
                border: "2px solid green",
                padding: "20px",
                marginTop: "20px"
            }}
        >
            <h2>Employee List</h2>

            {
                employees.length === 0
                    ? <h3>No Employees</h3>
                    : employees.map((emp) => (
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

                                    console.log("Employee ID:", emp.id);

                                    deleteEmployee(emp.id);

                                }}
                            >
                                Delete
                            </button>

                        </div>
                    ))
            }

        </div>
    );
}

export default EmployeeList;