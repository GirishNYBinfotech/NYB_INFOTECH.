import React, { useEffect, useState } from "react";

function Loding() {
  const [users,setUsers]=useState([])
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    setTimeout(() => {
      setUsers([
        {id:1,name:"Ram"},
        {id:2,name:"Girish"}
      ])
      setLoading(false);
    },2000)
  },[])

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (users.length===0) {
    return <h2>No users found.</h2>;
  }

  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Loding;