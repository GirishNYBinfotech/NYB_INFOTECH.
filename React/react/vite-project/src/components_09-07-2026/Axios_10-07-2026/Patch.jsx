import React from "react";
import axios from "axios";

function Patch() {

  const updateName = () => {

    axios
      .patch("https://jsonplaceholder.typicode.com/users/1", {
        name: "Only Name Updated"
      })
      .then((response) => {
        console.log(response.data);
        alert("Name Updated");
      })
      .catch((error) => {
        console.log(error);
      });

  };

  return (
    <div>
      <h2>PATCH Request</h2>

      <button onClick={updateName}>
        Update Name
      </button>

    </div>
  );
}

export default Patch;