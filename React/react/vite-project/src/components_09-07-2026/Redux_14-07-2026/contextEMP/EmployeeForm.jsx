import { useContext, useState } from "react";
import EmployeeContext from "./EmployeeContext";

function EmployeeForm() {

    console.log("📝 EmployeeForm Rendered");

    const { addEmployee } = useContext(EmployeeContext);

    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");

    //------------------------

    const handleSubmit = () => {

        const employee = {

            id: Date.now(),

            name,

            department

        };

        console.log(" ");
        console.log("==============================");
        console.log("👤 USER CLICKED ADD EMPLOYEE");

        console.log("Employee Created");

        console.log(employee);

        console.log(" ");

        console.log("Calling addEmployee()...");

        addEmployee(employee);

        setName("");

        setDepartment("");

    };

    return (

        <div
            style={{
                border: "2px solid black",
                padding: "20px",
                marginBottom: "20px"
            }}
        >

            <h2>Context API Form</h2>

            <input

                placeholder="Employee Name"

                value={name}

                onChange={(e) => setName(e.target.value)}

            />

            <br /><br />

            <input

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