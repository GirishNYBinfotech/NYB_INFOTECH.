import React from "react";
import AdminDashboard from "./AdminDashboard";
import Authorization from "./Authorization";

const AuthorizedAdmin = Authorization(AdminDashboard, "admin")
function Admin() {
  return (
    <div>
      <AuthorizedAdmin role="admin" />
    </div>
  )
}

export default Admin