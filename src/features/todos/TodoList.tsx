import { Toaster } from "react-hot-toast";
import TodoForm from "./TodoForm";
import SingleTodo from "./SingleTodo";
import useTodoHook from "./hooks/useTodoHook";
import { ITodo } from "../../types/todo.type";

const TodoList = () => {
  const { isLoading, error, todos } = useTodoHook();

  let content = <p></p>;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>Error in fetching todos...</p>;
  } else {
    content = (
      <section>
        {todos.map((item: ITodo) => (
          <SingleTodo key={item.id} todo={item} />
        ))}
      </section>
    );
  }
  return (
    <main>
      <Toaster toastOptions={{ position: "top-center" }} />
      <h1>Todo List</h1>
      <TodoForm />
      {content}
    </main>
  );
};
export default TodoList;
