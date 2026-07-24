import React from "react";

// Normal Component
function Hoc() {
  return <h2>Welcome to Dashboard</h2>;
}

// Higher Order Component
function withAuth(WrappedComponent) {
  return function EnhancedComponent() {
    const isLoggedIn=true
    if (isLoggedIn) {
      return <WrappedComponent />;
    } 
    else {
      return <h2>Please Login</h2>;
    }
  }
}

// Creating Enhanced Component
const AuthDashboard = withAuth(Hoc)

function App() {
  return (
    <div>
      <AuthDashboard />
    </div>
  );
}

export default Hoc

