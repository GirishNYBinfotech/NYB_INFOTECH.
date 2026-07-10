import React from "react";
import axios from "axios";

function Post() {

  const addUser = () => {

    const newUser = {
      name: "Girish",
      username: "girish123",
      email: "girish@gmail.com"
    };

    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((response) => {
        console.log(response.data);
        alert("User Added Successfully");
      })
      .catch((error) => {
        console.log(error);
      });

  };
  return (
    <div>
      <h2>POST Request</h2>
      <button onClick={addUser}>Add User</button>

    </div>
  );
}

export default Post;