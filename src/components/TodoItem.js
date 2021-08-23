import React from "react";
import "../scss/TodoList.scss";
import { MdDone, MdDelete } from "react-icons/md";
import classnames from "classnames";

function TodoItem({ id, active, text }) {
  console.log(active);
  return (
    <div className={classnames("TodoItem", active)}>
      <div className="check">
        <MdDone />
      </div>
      <span className="text">{text}</span>
      <div className="remove">
        <MdDelete />
      </div>
    </div>
  );
}

export default TodoItem;
