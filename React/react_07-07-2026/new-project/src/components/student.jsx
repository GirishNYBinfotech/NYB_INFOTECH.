function Student(i) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Name:{i.name}</p>
      <p>number:{i.number}</p>
    </div>
  );
}

export default Student;