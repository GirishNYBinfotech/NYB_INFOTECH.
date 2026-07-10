import React from "react";
import axios from "axios";

function Put() {
  const updateUser = () => {
    const updatedUser={
      id: 1,
      name: "Updated Girish",
      username: "updated123",
      email: "updated@gmail.com"
    }
    axios
      .put("https://jsonplaceholder.typicode.com/users/1", updatedUser)
      .then((response) => {
        console.log(response.data);
        alert("User Updated");
      })
      .catch((error) => {
        console.log(error);
      });

  };

  return (
    <div>
      <h2>PUT Request</h2>

      <button onClick={updateUser}>
        Update User
      </button>

    </div>
  );
}

export default Put;