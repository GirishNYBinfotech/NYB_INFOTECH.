import React, { useEffect, useState } from "react";

function Assignment() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch Users
  const getUsers = async () => {
    try {
      setLoading(true);

      const response = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // Delete User
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Search
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>User List</h2>

      <input
        type="text"
        placeholder="Search User"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {filteredUsers.map((user)=>(
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Assignment;