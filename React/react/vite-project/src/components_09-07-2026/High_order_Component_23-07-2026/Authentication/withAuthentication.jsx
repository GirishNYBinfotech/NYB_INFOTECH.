import React from "react";

function withAuthentication(WrappedComponent) {
  function EnhancedComponent(props) {
    const isLoggedIn=props.isLoggedIn

    if (!isLoggedIn) {
      return <h2>Please Login First</h2>
    }
    return <WrappedComponent {...props} />
  }
  return EnhancedComponent
}

export default withAuthentication