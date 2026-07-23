function withWelcome(Component) {
  return function NewComponent() {
    return (
      <div>
        <h2>Welcome</h2>
        <Component/>
      </div>
    );
  };
}

export default withWelcome