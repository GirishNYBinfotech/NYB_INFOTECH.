import React from 'react'
import { Provider } from 'react-redux'
import store from '../../../components_09-07-2026/new_17-07-2026/Statemanagment/Reduxfundamentals/store'
import Attendance from '../../../components_09-07-2026/new_17-07-2026/Statemanagment/Reduxfundamentals/Attendance'

const Reduxpa = () => {
  return (
    <div>
        <Provider store={store}>
            <Attendance/>
        </Provider>
    </div>
  )
}

export default Reduxpa