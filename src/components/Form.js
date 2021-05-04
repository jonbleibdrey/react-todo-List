import React from "react";

const Form = ({ setInputText, setTodos, todos, inputText }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
    <form>
      <input
        onChange={inputTextHandler}
        type="text"
        value={inputText}
        className="todo-input"
      />
      <button onClick={addTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
};

export default Form;
