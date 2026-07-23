import React from "react";

function Loading(WrappedComponent) {

  function EnhancedComponent(props) {
    if (props.isLoading) {
      return <h2>Loading...</h2>
    }

    return <WrappedComponent {...props}/>
  }
  return EnhancedComponent
}

export default Loading