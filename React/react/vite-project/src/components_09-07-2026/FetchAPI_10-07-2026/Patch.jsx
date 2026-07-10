import React from 'react'

function Patch() {
     const patchPost=()=>{
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Patched Title",
      }),
    })
      .then((response)=>response.json())
      .then((data)=>console.log(data))
      .catch((error)=>console.log(error));
  }
  return (
    <div>
      <button onClick={patchPost}>PATCH Request</button>
    </div>
  );
}
export default Patch