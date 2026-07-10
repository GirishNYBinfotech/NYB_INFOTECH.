import React, { useContext } from 'react'
import Context1 from './context1';


function Context3() {
   const user = useContext(Context1);
  return (
    <div>
      <h3>Name: {user.name}</h3>
      <h3>Email: {user.email}</h3>
    </div>
  )
}

export default Context3