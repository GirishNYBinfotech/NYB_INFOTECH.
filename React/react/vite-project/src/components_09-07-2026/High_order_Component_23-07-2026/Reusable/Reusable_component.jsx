function Reusable_component(Component) {
  return function NewComponent(props) {
    return (
      <div style={{ border: "2px solid black", padding: "10px" }}>
        <Component {...props} />
      </div>
    )
  }
}

export default Reusable_component