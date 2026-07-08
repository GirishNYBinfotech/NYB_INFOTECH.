// reusing the same child with diffrent props
import Child from "./Child";

function Parent() {
  const skills1 = ["HTML", "CSS", "JavaScript"];
  const student1 = {
    id: 101,
    city: "Hyderabad",
  };

  const skills2 = ["React", "Node.js"];
  const student2 = {
    id: 102,
    city: "Bangalore",
  };

  return (
    <div>
      <h1>Parent Component</h1>

      <Child
        name="Girish"
        age={22}
        skills={skills1}
        student={student1}
      />

      <hr />

      <Child
        name="Rahul"
        age={24}
        skills={skills2}
        student={student2}
      />
    </div>
  );
}

export default Parent;