function Child(props) {
  return (
    <div>
      <h2>Child Component</h2>

      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>

      <p>Skills:</p>
      <ul>
        {props.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <p>ID: {props.student.id}</p>
      <p>City: {props.student.city}</p>
    </div>
  );
}

export default Child;