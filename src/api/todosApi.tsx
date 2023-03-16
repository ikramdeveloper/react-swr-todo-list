import axios from "axios";
import { IdType, ITodo } from "../types/todo.type";

const todosApi = axios.create({
  baseURL: "https://seemly-truthful-scribe.glitch.me",
});

const delay = () =>
  new Promise((resolve) => setTimeout(() => resolve(""), 800));

export const todosEndpoint = "/todos";

export const fetchTodos = async () => {
  await delay();
  const { data } = await todosApi.get(todosEndpoint);
  return data;
};

export const addTodo = async (body: ITodo) => {
  await delay();
  const { data } = await todosApi.post(todosEndpoint, body);
  return data;
};

export const updateTodo = async (body: Partial<ITodo>) => {
  await delay();
  const { data } = await todosApi.put(`${todosEndpoint}/${body.id}`, body);
  return data;
};

export const deleteTodo = async (todoId: IdType) => {
  await delay();
  const { data } = await todosApi.delete(`${todosEndpoint}/${todoId}`);
  return data;
};
