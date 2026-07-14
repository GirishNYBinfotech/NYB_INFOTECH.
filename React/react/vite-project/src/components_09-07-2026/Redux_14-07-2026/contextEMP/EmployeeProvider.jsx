import { useState } from "react";
import EmployeeContext from "./EmployeeContext";

function EmployeeProvider({ children }) {

    const [employees, setEmployees] = useState([]);

    console.log("==================================");
    console.log("🏢 EmployeeProvider Rendered");
    console.log("Current Employees:", employees);

    //----------------------------
    // Add Employee
    //----------------------------

    const addEmployee = (employee) => {

        console.log(" ");
        console.log("📥 addEmployee() Called");

        console.log("Employee Received From Form");
        console.log(employee);

        setEmployees((previousEmployees) => {

            console.log("Previous State");
            console.log(previousEmployees);

            const updatedEmployees = [...previousEmployees, employee];

            console.log("New State");
            console.log(updatedEmployees);

            return updatedEmployees;
        });

    };

    //----------------------------
    // Delete Employee
    //----------------------------

    const deleteEmployee = (id) => {

        console.log(" ");
        console.log("🗑 deleteEmployee() Called");

        console.log("Deleting Employee Id:", id);

        setEmployees((previousEmployees) => {

            console.log("Previous State");
            console.log(previousEmployees);

            const updatedEmployees =
                previousEmployees.filter(emp => emp.id !== id);

            console.log("Updated State");
            console.log(updatedEmployees);

            return updatedEmployees;

        });

    };

    return (

        <EmployeeContext.Provider
            value={{
                employees,
                addEmployee,
                deleteEmployee
            }}
        >

            {children}

        </EmployeeContext.Provider>

    );

}

export default EmployeeProvider;