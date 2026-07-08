import Child from "./Child";

function Parent() {
  const name = "Girish";
  const age = 22;
  const skills = ["HTML", "CSS", "JavaScript", "React"];
  const student = {
    id: 101,
    city: "Hyderabad",
    course: "React"
  };

  return (
    <div>
      <h2>Parent Component</h2>

      <Child
        name={name}
        age={age}
        skills={skills}
        student={student}
      />
    </div>
  );
}

export default Parent;