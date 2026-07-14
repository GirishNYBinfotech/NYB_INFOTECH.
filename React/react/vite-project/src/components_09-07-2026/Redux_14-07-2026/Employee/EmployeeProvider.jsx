import { createContext, useState } from "react";

export const EmployeeContext = createContext();

function EmployeeProvider({ children }) {
  const [employees, setEmployees] = useState([]);

  console.log("🏢 Provider Rendered");
  console.log("Current Employees:", employees);

  const addEmployee = (employee) => {
    console.log("---------------------------");
    console.log("Provider");
    console.log("Received Employee:", employee);

    setEmployees((prev) => {
      const updated = [...prev, employee];
      console.log("Updated Employee List:", updated);
      return updated;
    });
  };

  return (
    <EmployeeContext.Provider
      value={{employees,addEmployee,}}>
      {children}
    </EmployeeContext.Provider>
  );
}

export default EmployeeProvider;