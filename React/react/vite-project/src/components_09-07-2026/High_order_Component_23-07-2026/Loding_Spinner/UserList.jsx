import React from "react";

function UserList({ users }) {

  return (
    <div>
      <h2>Users</h2>

      {users.map((user) => (
        <h3 key={user.id}>
          {user.id}. {user.name}
        </h3>
      ))}

    </div>
  );
}

export default UserList;