import React from 'react'
import { Provider } from 'react-redux'
import store from '../../../components_09-07-2026/new_17-07-2026/Statemanagment/Reduxtoolkt/store'
import Theme from '../../../components_09-07-2026/new_17-07-2026/Statemanagment/Reduxtoolkt/Theme'

const Themepages = () => {
  return (
    <div>
        <Provider store={store}>
            <Theme/>
        </Provider>
    </div>
  )
}

export default Themepages