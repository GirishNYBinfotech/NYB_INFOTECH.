import React, { useEffect, useState } from "react";


function Promises() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data.filter((user) => user.id <= 5);
      })
      .then((filteredUsers) => {
        setUsers(filteredUsers);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
        <h3>usingpromises</h3>
      <h2>First Five Users</h2>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Promises;