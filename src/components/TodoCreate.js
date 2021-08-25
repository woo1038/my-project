import React, { useState } from "react";
import "../scss/TodoList.scss";
import { MdAdd } from "react-icons/md";
import classnames from "classnames";
import { useTodoDispatch, useTodoNextId } from "../TodoContext";

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);
  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        active: false
      }
    })
    setValue('');
    setOpen(false);
    nextId.current += 1;
  }
  

  return (
    <>
      <form onSubmit={onSubmit} className={classnames("TodoInputs", { open })}>
        <input
          onChange={onChange}
          className="input"
          placeholder="할 일을 입력 후, Enter 를 누르세요"
          value={value}
          autoFocus
        />
      </form>
      <div onClick={onToggle} className={classnames("TodoCreate", { open })}>
        <MdAdd />
      </div>
    </>
  );
}

export default React.memo(TodoCreate);
