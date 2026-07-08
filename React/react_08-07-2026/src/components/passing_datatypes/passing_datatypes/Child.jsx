function Child(props) {
  return (
    <div>
      <h2>Child Component</h2>

      <h3>String</h3>
      <p>Name: {props.name}</p>

      <h3>Number</h3>
      <p>Age: {props.age}</p>

      <h3>Array</h3>
      <ul>
        {props.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h3>Object</h3>
      <p>ID: {props.student.id}</p>
      <p>City: {props.student.city}</p>
      <p>Course: {props.student.course}</p>
    </div>
  );
}

export default Child;