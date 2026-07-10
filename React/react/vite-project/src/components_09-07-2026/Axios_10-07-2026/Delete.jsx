import React from "react";
import axios from "axios";

function Delete() {

  const deleteUser = () => {

    axios
      .delete("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        console.log(response.data);
        alert("User Deleted");
      })
      .catch((error) => {
        console.log(error);
      });

  };

  return (
    <div>
      <h2>DELETE Request</h2>
      <button onClick={deleteUser}>Delete User</button>

    </div>
  );
}

export default Delete;