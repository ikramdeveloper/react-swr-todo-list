import { ITodo } from "../types/todo.type";

const addTodoOptions = (newTodo: ITodo) => {
  return {
    optimisticData: (todos: ITodo[]) =>
      [...todos, newTodo].sort((a, b) => b.id - a.id),
    populateCache: (added: ITodo, todos: ITodo[]) =>
      [...todos, added].sort((a, b) => b.id - a.id),
    rollbackOnError: true,
    revalidate: false,
  };
};

const updateTodoOptions = (updatedTodo: ITodo) => {
  return {
    optimisticData: (todos: ITodo[]) => {
      const prevTodos = todos.filter((item) => item.id !== updatedTodo.id);
      return [...prevTodos, updatedTodo].sort((a, b) => b.id - a.id);
    },
    populateCache: (updated: ITodo, todos: ITodo[]) => {
      const prevTodos = todos.filter((item) => item.id !== updated.id);
      return [...prevTodos, updated].sort((a, b) => b.id - a.id);
    },
    rollbackOnError: true,
    revalidate: false,
  };
};

const deleteTodoOptions = (id: number) => {
  return {
    optimisticData: (todos: ITodo[]) => todos.filter((item) => item.id !== id),
    populateCache: (_: any, todos: ITodo[]) =>
      todos.filter((item) => item.id !== id),
    rollbackOnError: true,
    revalidate: false,
  };
};

export { addTodoOptions, updateTodoOptions, deleteTodoOptions };
