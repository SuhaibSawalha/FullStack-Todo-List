import { useAddTodo } from "../../../hooks";
import { useState } from "react";

const AddTodo = () => {
  const { addTodo } = useAddTodo();
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  return (
    <div className="add-todo">
      <form>
        <input
          type="text"
          placeholder="add new task"
          name="todo"
          value={todo}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-add" onClick={handleClick}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
