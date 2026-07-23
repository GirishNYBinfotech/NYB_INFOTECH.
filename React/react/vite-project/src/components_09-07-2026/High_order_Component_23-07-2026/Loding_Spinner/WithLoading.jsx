import React from "react";

const withLoading = (WrappedComponent) => {

  return function EnhancedComponent({ isLoading, ...props }) {

    if (isLoading) {
      return (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default withLoading;