import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "./employeeSlice";

const initialState = {
  name: "",
  department: "",
  salary: ""
};

function reducer(state, action) {
  switch (action.type) {
    case "INPUT":
      return {
        ...state,
        [action.field]: action.value
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

function EmployeeForm() {
  const [state, dispatchForm] = useReducer(reducer, initialState);
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(
      addEmployee({
        id: Date.now(),
        ...state
      })
    );

    dispatchForm({
      type: "RESET"
    });
  };

  return (
    <div>

      <h2>Add Employee</h2>
      <input
        placeholder="Name"
        value={state.name}
        onChange={(e) =>
          dispatchForm({
            type: "INPUT",
            field: "name",
            value: e.target.value})} />
      <br /><br />
      <input
        placeholder="Department"
        value={state.department}
        onChange={(e) =>
          dispatchForm({
            type: "INPUT",
            field: "department",
            value: e.target.value
          })}/>
      <br /><br />
      <input
        placeholder="Salary"
        value={state.salary}
        onChange={(e) =>
          dispatchForm({
            type: "INPUT",
            field: "salary",
            value: e.target.value
          })}/>
      <br /><br />
      <button onClick={submit}>Add Employee</button>

    </div>
  );
}

export default EmployeeForm;