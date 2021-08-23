import React from "react";
import "../scss/TodoList.scss";

function TodoHead() {
  return (
    <ul className="TodoHead">
      <h1>2021년 8월 24일</h1>
      <li className="day">일요일</li>
      <li className="count">할 일 1개 남음</li>
    </ul>
  );
}

export default TodoHead;
