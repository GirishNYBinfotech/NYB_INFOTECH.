import React, { useEffect, useState } from "react";
import "../../../App.css";

function Practice() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
  }, [])

  return (
    <div>
      <h1>Users</h1>
      <div className="container">
        {users.map((user) => (
          <div className="card" key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>City: {user.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Practice