import React from 'react'
import { Provider } from 'react-redux'
import store from '../../components_09-07-2026/Redux_14-07-2026/ReduxEMP/store'
import ContextEmppage from './ContextEMPpage'

const Providerpage = () => {
  return (
    <div>
         <Provider store={store}>

    <ContextEmppage/>

  </Provider>
    </div>
  )
}

export default Providerpage