import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { ITodo } from "../../types/todo.type";
import useTodoHook from "./hooks/useTodoHook";

interface ISingleTodo {
  todo: ITodo;
}

const SingleTodo = ({ todo }: ISingleTodo) => {
  const { updateTodoMutation, deleteTodoMutation } = useTodoHook();

  return (
    <article key={todo.id}>
      <div className="todo">
        <input
          type="checkbox"
          name="todo"
          id={String(todo.id)}
          checked={todo.completed}
          onChange={() => {
            updateTodoMutation({ ...todo, completed: !todo.completed });
          }}
        />
        <label htmlFor={String(todo.id)}>{todo.todo}</label>
      </div>
      <button
        className="trash"
        onClick={() => {
          deleteTodoMutation(todo.id);
        }}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </article>
  );
};
export default SingleTodo;
