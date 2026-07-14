import { useContext } from "react";
import EmployeeContext from "./EmployeeContext";

function EmployeeCount() {

    console.log("🔢 EmployeeCount Rendered");

    const { employees } = useContext(EmployeeContext);

    console.log("Employee Count:", employees.length);

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

export default EmployeeCount;