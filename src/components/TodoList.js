import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, inputText, onEdit, setOnEdit }) => {
  console.log(todos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            text={todo.text}
            key={todo.id}
            completed={todo.completed}
            todo={todo}
            onEdit={onEdit}
            setOnEdit={setOnEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
