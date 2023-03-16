import useSWR from "swr";
import toast from "react-hot-toast";
import { IdType, ITodo } from "../../../types/todo.type";
import {
  addTodo,
  deleteTodo,
  fetchTodos,
  todosEndpoint as cacheKey,
  updateTodo,
} from "../../../api/todosApi";
import {
  addTodoOptions,
  deleteTodoOptions,
  updateTodoOptions,
} from "../../../api/todosOptions";

const useTodoHook = () => {
  const {
    isLoading,
    error,
    data: todos,
    mutate,
  } = useSWR(cacheKey, fetchTodos, {
    onSuccess: (data) => data.sort((a: ITodo, b: ITodo) => b.id - a.id),
  });

  const addTodoMutation = async (newTodo: ITodo) => {
    try {
      await mutate(addTodo(newTodo), addTodoOptions(newTodo));

      toast.success("Success! Added new todo.", {
        duration: 1000,
        icon: "🎉",
      });
    } catch (err: any) {
      toast.error(`Failed to add the new todo: ${err.message}`, {
        duration: 1000,
      });
    }
  };

  const updateTodoMutation = async (updatedTodo: ITodo) => {
    try {
      await mutate(updateTodo(updatedTodo), updateTodoOptions(updatedTodo));

      toast.success("Success! Updated todo.", {
        duration: 1000,
        icon: "🎉",
      });
    } catch (err: any) {
      toast.error(`Failed to update the todo: ${err.message}`, {
        duration: 1000,
      });
    }
  };

  const deleteTodoMutation = async (todoId: IdType) => {
    try {
      await mutate(deleteTodo(todoId), deleteTodoOptions(todoId));

      toast.success("Success! Deleted todo.", {
        duration: 1000,
        icon: "🎉",
      });
    } catch (err: any) {
      toast.error(`Failed to delete todo: ${err.message}`, {
        duration: 1000,
      });
    }
  };

  return {
    isLoading,
    error,
    todos,
    updateTodoMutation,
    deleteTodoMutation,
    addTodoMutation,
  };
};

export default useTodoHook;
