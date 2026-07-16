import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoslice";

function TodoForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    if (task.trim() === "") return;
    dispatch(addTodo(task));
    setTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}/>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TodoForm;