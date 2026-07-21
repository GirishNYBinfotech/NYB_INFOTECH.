function Maps() {
  const employees=[
    { id: 1, name: "Ram" },
    { id: 2, name: "Ravi" },
    { id: 3, name: "John" }
  ];

  return (
    <div>
      {employees.map((employee) => (
        <h2 key={employee.id}>{employee.id}.{employee.name}</h2>
      ))}
    </div>
  );
}

export default Maps