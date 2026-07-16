import React from 'react'
import { Provider } from 'react-redux'
import store from '../../../components_09-07-2026/Practice_16-07-2026/Mini-project/store'
import { ThemeProvider } from '../../../components_09-07-2026/Practice_16-07-2026/Mini-project/ThemeContext'
import Navbar from '../../../components_09-07-2026/Practice_16-07-2026/Mini-project/Navbar'
import BookForm from '../../../components_09-07-2026/Practice_16-07-2026/Mini-project/BookForm'
import BookList from '../../../components_09-07-2026/Practice_16-07-2026/Mini-project/BookList'

const Miniprojectpages = () => {
  return (
    <div>
         <Provider store={store}>

      <ThemeProvider>

        <Navbar/>

        <BookForm/>

        <BookList/>

      </ThemeProvider>

    </Provider>
    </div>
  )
}

export default Miniprojectpages