import React from "react";
import Dashboard from "./Dashboard";
import withAuthentication from "./withAuthentication";

const ProtectedDashboard = withAuthentication(Dashboard);
function Login() {
  return (
    <div>
      <ProtectedDashboard isLoggedIn={false} />
    </div>
  );
}
export default Login