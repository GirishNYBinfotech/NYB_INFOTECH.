import React from 'react'
import EmployeeList from "../../components_09-07-2026/Redux_14-07-2026/ReduxEMP/REmployeeList"
import { Provider } from 'react-redux'
import store from '../../components_09-07-2026/Redux_14-07-2026/ReduxEMP/store'



const Providerpage = () => {
  return (
    <div>
        <Provider store={store}>
      <EmployeeList/>
    </Provider>
    </div>
  )
}

export default Providerpage