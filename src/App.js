import React, { useState } from "react";
import "./App.css";
import Edit from "./components/Edit";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [onEdit, setOnEdit] = useState(false);

  return (
    <div className="App">
      <header>
        <h1>Fun things to-do list</h1>
      </header>
      {onEdit ? (
        <Edit
          setInputText={setInputText}
          todos={todos}
          inputText={inputText}
          setTodos={setTodos}
          
        />
      ) : (
        <Form
          todos={todos}
          inputText={inputText}
          setTodos={setTodos}
          setInputText={setInputText}
        />
      )}

      <TodoList
        onEdit={onEdit}
        setOnEdit={setOnEdit}
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
      />
    </div>
  );
}

export default App;
