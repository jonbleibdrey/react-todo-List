import React, { useState } from "react";

const Todo = ({ todos, setTodos, todo, text }) => {
  const [update, setUpdate] = useState(text);
  const [onEdit, setOnEdit] = useState(false);

  const deleteHandler = () => {
    setTodos(todos.filter((elem) => elem.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const inputTextHandler = (e) => {
    setUpdate(e.target.value);
  };

  const updateHandler = (e) => {
    e.preventDefault();
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            text: update,
          };
        }
        return item;
      })
    );
    setOnEdit(false);
  };

  return (
    <>
      {onEdit ? (
        <form onSubmit={updateHandler}>
          <input type="text" onChange={inputTextHandler} value={update} />
          <button type="submit"><i className="fas fa-pen-square"></i></button>
        </form>
      ) : (
        <div className="todo">
          <li className={`${todo.completed ? "completed" : ""}`} style={{ padding: "0rem 0.5rem"}}>
            {text}
          </li>
          <button onClick={() => setOnEdit(true)} className="update-btn">
            <i className="fas fa-pen-square"></i>
          </button>
          <button onClick={completeHandler} className="complete-btn">
            <i className="fas fa-check"></i>
          </button>
          <button onClick={deleteHandler} className="trash-btn">
            <i className="fas fa-trash"></i>
          </button>
        </div>
      )}
    </>
  );
};

export default Todo;
