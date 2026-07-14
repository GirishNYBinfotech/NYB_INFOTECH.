import React from 'react'
import EmployeeList from '../../components_09-07-2026/Redux_14-07-2026/Employee/EmployeeList'
import EmployeeForm from '../../components_09-07-2026/Redux_14-07-2026/Employee/EmployeeForm'
import EmployeeProvider from '../../components_09-07-2026/Redux_14-07-2026/Employee/EmployeeProvider'

function Employeepages() {
  return (
    <div>
      <EmployeeProvider>
        <EmployeeList/>
        <EmployeeForm/>
      </EmployeeProvider>
    </div>
  )
}

export default Employeepages