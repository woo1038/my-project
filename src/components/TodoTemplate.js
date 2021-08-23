import React from "react";
import "../scss/TodoList.scss";

function TodoTemplate({children}) {
  return <div className="TodoSection">{children}</div>;
}

export default TodoTemplate;
