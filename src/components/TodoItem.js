import React from "react";
import "../scss/TodoList.scss";
import { MdDone, MdDelete } from "react-icons/md";
import classnames from "classnames";
import { useTodoDispatch } from "../TodoContext";

function TodoItem({ id, active, text }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({
    type: "TOGGLE",
    id
  })
  const onRemove = () => dispatch({
    type: "REMOVE",
    id
  })

  return (
    <div onClick={onToggle} className={classnames("TodoItem", {active})}>
      <div className="check">
        <MdDone />
      </div>
      <span className="text">{text}</span>
      <div onClick={onRemove} className="remove">
        <MdDelete />
      </div>
    </div>
  );
}

export default React.memo(TodoItem);
