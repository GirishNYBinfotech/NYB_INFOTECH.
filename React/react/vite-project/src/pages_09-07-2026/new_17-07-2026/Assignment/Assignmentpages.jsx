import React from 'react'
import Details from '../../../components_09-07-2026/new_17-07-2026/Assignment/Details'
import { Provider } from 'react-redux'
import { store } from '../../../components_09-07-2026/new_17-07-2026/Assignment/store'

const Assignmentpages = () => {
  return (
    <div>
        <Provider store={store}>
            <Details/>
        </Provider>
        
    </div>
  )
}

export default Assignmentpages