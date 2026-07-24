function withLoading(WrappedComponent) {

  function EnhancedComponent({ isLoading, ...props }) {

    // Conditional Rendering
    if (isLoading) {
      return (
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading employees...</p>
        </div>
      )
    }
    return <WrappedComponent {...props} />
  }
  return EnhancedComponent;
}

export default withLoading