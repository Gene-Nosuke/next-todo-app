import { TodoType } from "../pages/types";
import React, { useEffect } from "react";
import Todo from "./Todo";

interface TodoListProps {
  todos: TodoType[];
}

const TodoList = ({ todos }: TodoListProps) => {
  console.log("This is TodoList");

  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
