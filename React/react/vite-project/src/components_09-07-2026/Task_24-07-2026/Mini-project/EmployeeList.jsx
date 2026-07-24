function EmployeeList({ employees }) {
  return (
    <div>
      <h2>Employee List</h2>

      {/* Conditional Rendering */}
      {employees.length === 0 ? (
        <p>No employees found</p>
      ) : (
        <div className="employee-list">
          {employees.map((employee) => (
            <div
              className="employee-card"
              key={employee.id}
            >
              <h3>{employee.name}</h3>
              <p>{employee.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EmployeeList

