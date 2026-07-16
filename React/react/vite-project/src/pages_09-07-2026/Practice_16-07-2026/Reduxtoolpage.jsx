import React from 'react'
import { Provider } from 'react-redux'
import store from '../../components_09-07-2026/Practice_16-07-2026/Redux/reduxtool/store'
import TodoForm from '../../components_09-07-2026/Practice_16-07-2026/Redux/reduxtool/TodoForm'
import TodoList from '../../components_09-07-2026/Practice_16-07-2026/Redux/reduxtool/TodoList'

const Reduxtoolpage = () => {
  return (
    <div>
        <Provider store={store}>
      <div>
        <h1>Redux Toolkit Todo App</h1>
        <TodoForm/>
        <TodoList/>
      </div>
    </Provider>
    </div>
  )
}

export default Reduxtoolpage