import { useEffect, useState } from "react";
import withLoading from "./withLoading";
import EmployeeList from "./EmployeeList";
import EmployeeForm from "./EmployeeForm";


// HOC wraps EmployeeList
const EmployeeListWithLoading = withLoading(EmployeeList);

function Employee() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // API Integration using useEffect
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch employees");
        }

        return response.json();
      })
      .then((data) => {
        setEmployees(data.slice(0, 2));
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Add new employee
  const addEmployee = (employee) => {
    const newEmployee = {
      id: Date.now(),
      ...employee,
    };

    setEmployees((previousEmployees) => [
      ...previousEmployees,
      newEmployee,
    ]);
  };

  return (
    <div className="container">
      <h1>Employee Management System</h1>

      {/* Reusable Form Component */}
      <EmployeeForm addEmployee={addEmployee} />

      {/* Conditional Rendering */}
      {error ? (
        <h3 className="error">Error: {error}</h3>
      ) : (
        <EmployeeListWithLoading
          isLoading={loading}
          employees={employees}
        />
      )}
    </div>
  );
}

export default Employee