import React from "react";
import "../scss/TodoList.scss";
import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <div className="TodoList">
      <TodoItem text="흐으으으으ㅡ음" active="active" />
      <TodoItem text="이렇게?" active="active" />
      <TodoItem text="요렇게" />
      <TodoItem text="졸린건가?" />
    </div>
  );
}

export default TodoList;
