import React, { useState } from "react";

//Component Composition
function Card({ children }) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",
        margin: "10px",
      }}
    >
      {children}
    </div>
  );
}

function AdminDashboard({ username }) {
  return (
    <Card>
      <h2>Admin Dashboard</h2>
      <p>Welcome, {username}</p>
    </Card>
  );
}

//HOC
function withAuthorization(WrappedComponent) {
  return function EnhancedComponent(props) {
    if (!props.isAdmin) {
      return (
        <Card>
          <h2>Access Denied</h2>
          <p>Only admins can access this page.</p>
        </Card>
      );
    }

    return <WrappedComponent {...props} />
  };
}

// Enhanced Component
const ProtectedAdminDashboard =
  withAuthorization(AdminDashboard)


function Component() {
  // HOOK
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div>
      <h1>React HOC,Hooks,Composition</h1>

      <button onClick={() => setIsAdmin(!isAdmin)}>
        {isAdmin ? "Logout Admin" : "Login as Admin"}
      </button>

      <ProtectedAdminDashboard
        isAdmin={isAdmin}
        username="Girish"
      />
    </div>
  );
}

export default Component