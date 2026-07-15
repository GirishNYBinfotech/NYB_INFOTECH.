import React, { useReducer } from "react";
import reducer from "./reduser";
import initialstate from "./reduser"

function StudentForm() {
  const [state, dispatch] = useReducer(reducer, initialstate);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`
Name : ${state.name}
Age : ${state.age}
Course : ${state.course}
    `);

    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <h2>Student Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={state.name}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={state.age}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="course"
          placeholder="Enter Course"
          value={state.course}
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">Register</button>

        <button
          type="button"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
      </form>

      <hr />

      <h3>Preview</h3>

      <p>Name : {state.name}</p>
      <p>Age : {state.age}</p>
      <p>Course : {state.course}</p>
    </div>
  );
}

export default StudentForm;