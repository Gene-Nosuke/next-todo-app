"use client";

import React, { useEffect, useRef, useState } from "react";
import { TodoType } from "../pages/types";
import { Input } from "postcss";
import { deleteTodo, editTodo } from "../pages/api";

interface TodoProps {
  todo: TodoType;
}

const Todo = ({ todo }: TodoProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const [isEditing, setIsEditing] = useState(false);
  const [editedTodoTitle, setEditedTodoTitle] = useState(todo.text);

  const handleSave = async () => {
    await editTodo(todo.id, editedTodoTitle);
    setIsEditing(false);
  };

  useEffect(() => {
    if (isEditing) {
      ref.current?.focus();
    }
  });

  const handleEdit = async () => {
    setIsEditing(true);
  };

  const handleDelete = async () => {
    await deleteTodo(todo.id);
  };

  return (
    <li
      key={todo.id}
      className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow"
    >
      {isEditing ? (
        <input
          ref={ref}
          type="text"
          className="mr-2 py-1 px-2 rounded border-gray-400 border"
          value={editedTodoTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEditedTodoTitle(e.target.value)
          }
        />
      ) : (
        <span>{todo.text}</span>
      )}

      <div>
        {isEditing ? (
          <button className="text-blue-500 mr-3" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button className="text-green-500 mr-3" onClick={handleEdit}>
            Edit
          </button>
        )}

        <button className="text-red-500" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Todo;
