import { useUpdateTodo, useDeleteTodo } from "./../../../hooks";

const Todo = ({ todo }) => {
  const { updateTodo } = useUpdateTodo();
  const { deleteTodo } = useDeleteTodo();

  const handleDone = () => {
    updateTodo(todo._id);
  };

  const handleDelete = () => {
    deleteTodo(todo._id);
  };

  return (
    <div className={`todo-row ${todo.completed ? "completed" : ""}`}>
      <p className="todo-id">{todo._id}</p>
      <p className="todo-todo">{todo.todo}</p>
      <p className="todo-completed">
        {todo.completed ? "Completed" : "Pending"}
      </p>
      <div className="todo-btn">
        <button className="btn btn-delete" onClick={handleDelete}>
          Delete
        </button>
        <button
          className="btn btn-done"
          disabled={todo.completed}
          onClick={handleDone}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default Todo;
