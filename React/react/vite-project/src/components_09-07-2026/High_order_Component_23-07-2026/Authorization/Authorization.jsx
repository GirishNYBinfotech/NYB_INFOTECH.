import React from "react";

function Authorization(WrappedComponent, allowedRole) {

  function EnhancedComponent(props) {
    if (props.role!==allowedRole) {
      return <h2>Access Denied</h2>
    }
    return <WrappedComponent {...props} />
  }
  return EnhancedComponent
}

export default Authorization