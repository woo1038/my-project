import React from "react";
import "../scss/TodoList.scss";
import TodoItem from "./TodoItem";
import { useTodoState } from "../TodoContext";

function TodoList() {
  const todos = useTodoState();

  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          active={todo.active}
        />
      ))}
    </div>
  );
}

export default TodoList;
