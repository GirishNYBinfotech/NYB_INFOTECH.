// import React, { useEffect } from 'react'

// const Child2 = ({h,send}) => {
//     send("Hello from Child2");
//     useEffect(()=>{
//         h("Hi parent")
//     },[])
//   return (
//     <div>
//         <h1>Child2 prop</h1>
//     </div>
//   )
// }

// export default Child2;

function Child2({send}) {
  send("Hello from Child2")

  return (
    <div>
      <h2>Child2 Component</h2>
    </div>
  );
}

export default Child2;