import React, { useState } from "react";
import Form from "./Form";

function ToDo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <Form edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo__row complete" : "todo_row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <button onClick={() => removeTodo(todo.id)}>delete</button>
      <button onClick={() => setEdit({ id: todo.id, value: todo.text })}>
        edit
      </button>
    </div>
  ));
}

export default ToDo;
