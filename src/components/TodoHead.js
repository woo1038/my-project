import React from "react";
import "../scss/TodoList.scss";
import { useTodoState } from "../TodoContext";

function TodoHead() {
  const todos = useTodoState();
  const unactive = todos.filter(todo => !todo.active);

  const today = new Date();
  const dateString = today.toLocaleDateString('kr-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  const dayString = today.toLocaleDateString('kr-KR', {
    weekday: 'long'
  })

  return (
    <ul className="TodoHead">
      <h1>{dateString}</h1>
      <li className="day">{dayString}</li>
      <li className="count">할 일 {unactive.length}개 남음</li>
    </ul>
  );
}

export default TodoHead;
