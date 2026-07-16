import React from 'react'
import { Provider } from 'react-redux'
import store from '../../../components_09-07-2026/Practice_16-07-2026/Redux/store'
import EmployeeForm from '../../../components_09-07-2026/Practice_16-07-2026/Redux/EmployeeForm'
import EmployeeList from '../../../components_09-07-2026/Practice_16-07-2026/Redux/EmployeeList'

function Reduxspages() {
  return (
    <div>
         <Provider store={store}>
      <div>
        <h1>Employee Management System</h1>
        <EmployeeForm />
        <EmployeeList />
      </div>
    </Provider>

    </div>
  )
}

export default Reduxspages