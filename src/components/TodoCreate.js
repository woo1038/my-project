import React, { useState } from "react";
import "../scss/TodoList.scss";
import { MdAdd } from "react-icons/md";
import classnames from "classnames";

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);

  return (
    <>
      <div className={classnames("TodoInputs", { open })}>
        <input
          className="input"
          placeholder="할 일을 입력 후, Enter 를 누르세요"
          autoFocus
        />
      </div>
      <div onClick={onToggle} className={classnames("TodoCreate", { open })}>
        <MdAdd />
      </div>
    </>
  );
}

export default TodoCreate;
