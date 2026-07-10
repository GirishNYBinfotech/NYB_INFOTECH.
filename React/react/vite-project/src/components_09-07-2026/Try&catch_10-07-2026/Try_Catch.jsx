import React, { useEffect, useState } from "react";

function Try_Catch() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Users List</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Try_Catch;