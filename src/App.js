import React, { useState } from "react";
import "./App.css";
import Edit from "./components/Edit";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Fun things to-do list</h1>
      </header>
      <Form
        todos={todos}
        inputText={inputText}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <TodoList
        inputText={inputText}
        setInputText={setInputText}
        setTodo={setTodo}
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
      />
    </div>
  );
}

export default App;
