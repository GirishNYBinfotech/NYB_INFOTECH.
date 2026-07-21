import React, { useEffect, useState } from "react";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch employees")
        }

        return response.json()
      })
      .then((data) => {
        setEmployees(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error.message)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>Error: {error}</h2>
  }

  return (
    <div>
      <h1>Employees</h1>
      {employees.map((employee) => (
        <h3 key={employee.id}>{employee.id}.{employee.name}</h3>
      ))}
    </div>
  )
}

export default EmployeeList;