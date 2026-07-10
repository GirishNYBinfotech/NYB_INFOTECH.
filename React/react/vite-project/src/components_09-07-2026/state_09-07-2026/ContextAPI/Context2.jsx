import React, { useContext } from 'react'
import Context1 from './context1';

const Context2 = () => {
     const user = useContext(Context1);//context1 is comming from created file which is in file comtext1,context1 file is connected to context file in that we have write data that data is connected to context1 which is created in context1 file.
  return (
    <div>Context2{user.name}</div>
  )
}

export default Context2