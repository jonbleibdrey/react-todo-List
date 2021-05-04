import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, inputText, setInputText }) => {
  console.log(todos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            setInputText={setInputText}
            inputText={inputText}
            todo={todo}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
