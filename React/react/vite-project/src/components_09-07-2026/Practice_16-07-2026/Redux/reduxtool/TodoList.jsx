import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "./todoslice";

function TodoList() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Todo List</h2>
      {todos.length === 0 ? (
        <p>No Tasks Available</p>
      ) : (
        todos.map((todo) => (
          <div key={todo.id}>
            <h3>{todo.task}</h3>
            <button onClick={() =>dispatch(deleteTodo(todo.id))}>Delete </button>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default TodoList;