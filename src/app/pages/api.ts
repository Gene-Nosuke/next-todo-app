import { Todo } from "./types";

export const getAllTodos = async (): Promise<Todo[]> => {
  const res = await fetch(`http://localhost:3001/tasks`);
  const todos = res.json();

  return todos;
};
