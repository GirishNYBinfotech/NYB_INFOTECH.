import React, { useEffect, useState } from "react";
import withLoading from "./WithLoading";
import UserList from "./UserList";


const EnhancedUserList = withLoading(UserList);

function Loding() {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    // Simulating API fetching
    setTimeout(() => {

      setUsers([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" }
      ]);

      setIsLoading(false);

    }, 3000);

  }, []);

  return (
    <div>

      <h1>HOC Loading Spinner</h1>

      <EnhancedUserList
        isLoading={isLoading}
        users={users}
      />

    </div>
  );
}

export default Loding