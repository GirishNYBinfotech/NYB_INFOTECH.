import React from "react";

function AdminDashboard() {
  return <h3>Welcome to Admin Dashboard</h3>
}

function GuestDashboard() {
  return <h3>Welcome to Guest Dashboard</h3>
}
function Login() {
  return <h3>Please Login</h3>
}
function User(){
  const isAuthenticated=true
  const role="admin"

  return (
    <div>
      {isAuthenticated?(role==="admin"?(<AdminDashboard/>):(<GuestDashboard/>)):(<Login />)}
    </div>
  );
}

export default User;