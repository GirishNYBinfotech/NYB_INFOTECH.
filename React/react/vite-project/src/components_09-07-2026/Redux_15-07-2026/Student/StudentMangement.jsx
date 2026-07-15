import React, { useReducer, useState } from "react";
import reducer from "./Student"
 let initialState={
    students:[]
 }
function StudentManagement() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  function addStudent() {
    if (name === "") return;
    dispatch({
      type: "ADD_STUDENT",
      payload: {
        id: Date.now(),
        name: name,
      },
    })
    setName("");
  }

  return (
    <div>

      <h1>Student Management</h1>
      <input
        type="text"
        placeholder="Enter Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}/>
      <button onClick={addStudent}>Add Student</button>
      <button
        onClick={() =>
          dispatch({
            type: "CLEAR_ALL", })}>Clear All</button>

      {state.students.map((student) => (
        <div key={student.id}>
          {student.name}
          <button onClick={()=>dispatch({type: "DELETE_STUDENT",payload: student.id,})}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default StudentManagement;