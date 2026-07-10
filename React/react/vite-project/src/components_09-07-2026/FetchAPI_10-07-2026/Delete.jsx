import React from 'react'

function Delete() {
   const deletePost=()=> {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log("Post Deleted Successfully");
        }
      })
      .catch((error) => console.log(error));
  }
  return (
    <div>
      <button onClick={deletePost}>DELETE Request</button>
    </div>
  )
}
export default Delete