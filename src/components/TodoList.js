import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, inputText, setInputText }) => {
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
            setInputText={setInputText}
            inputText={inputText}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
