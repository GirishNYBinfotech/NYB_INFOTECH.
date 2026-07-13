import React, { useEffect, useState } from "react";
import axios from "axios";

function Miniproject() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // GET using Fetch
  const getUsers = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");

      if (response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setUsers(data);
    } 
    catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  // POST using Axios
  const addUser = async () => {
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/users",
        {
          name: "Girish",
          email: "girish@gmail.com",
        }
      );

      console.log(response.data);
      alert("User Added");
    } 
    catch (err) {
      console.log(err);
    }
  };

  // PUT using Axios
  const updateUser = async () => {
    try {
      const response = await axios.put( "https://jsonplaceholder.typicode.com/users/1",
        {
          name: "Updated User",
          email: "updated@gmail.com",
        }
      );

      console.log(response.data);
      alert("User Updated");
    } 
    catch (err) {
      console.log(err);
    }
  };

  // PATCH using Axios
  const patchUser = async () => {
    try {
      const response = await axios.patch("https://jsonplaceholder.typicode.com/users/1",
        {
          name: "Patched User",
        }
      );

      console.log(response.data);
      alert("User Patched");
    } 
    catch (err) {
      console.log(err);
    }
  };

  // DELETE using Axios
  const deleteUser = async () => {
    try {
      await axios.delete("https://jsonplaceholder.typicode.com/users/1");

      alert("User Deleted");
    } 
    catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h2>React CRUD Example</h2>

      <button onClick={addUser}>POST</button>
      <button onClick={updateUser}>PUT</button>
      <button onClick={patchUser}>PATCH</button>
      <button onClick={deleteUser}>DELETE</button>

      <hr />

      {loading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}

      {users.map((user) => (
        <div key={user.id}>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Miniproject;