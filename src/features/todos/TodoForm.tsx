import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import useTodoHook from "./hooks/useTodoHook";

const TodoForm = () => {
  const { addTodoMutation, todos } = useTodoHook();
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodoMutation({
      userId: 1,
      todo: newTodo,
      completed: false,
      id: todos[0].id + 1,
    });
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">Enter a new todo</label>
      <div className="new-todo">
        <input
          type="text"
          id="new-todo"
          placeholder="Enter new todo..."
          value={newTodo}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="submit">
        <FontAwesomeIcon icon={faUpload} />
      </button>
    </form>
  );
};
export default TodoForm;
