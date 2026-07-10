import React, { useEffect, useState } from "react";

const Get1 = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>Users List</h2>

      {user.map((users) => (
        <p key={users.id}>{users.name}</p>
      ))}
    </div>
  );
};

export default Get1;