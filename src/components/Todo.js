import React from "react";

const Todo = ({ text, completed, todos, todo, setTodos, onEdit, setOnEdit }) => {

    
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
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

  const updateHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            text: "",
          };
        }
        return item;
      })
    );
  };



  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed": ""}`}>{text}</li>
      <button onClick={updateHandler} className="update-btn">
      <i className="fas fa-pen-square"></i>
      </button>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;