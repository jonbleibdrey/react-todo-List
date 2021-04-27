import React, { useState, useEffect, useRef } from "react";

const Form = (props) => {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <form className="todo__form" onSubmit={handleSubmit}>
        <input
          value={input}
          type="text"
          placeholder="add todo list"
          name="text"
          className="todo__input"
          onChange={handleChange}
          ref={inputRef}
        />
        <button className="todo__button"> add todo</button>
      </form>
    </div>
  );
};

export default Form;
