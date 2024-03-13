import React, { useState } from "react";
import "./App.css";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import axios from "axios";

function createTodo() {
  axios
    .post("http://localhost:3000", {
      editableIndex: "",
      editedText: "",
    })
    .then(({ data }) => {
      console.log(data);
    });
}

function App() {
  const [todos, setTodos] = useState([]);

  const handleAdd = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const handleRemove = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1 add={(createTodo)} >ToDo List</h1>
      <AddTodo todos={todos} onAdd={(handleAdd)} />
      <TodoList todos={todos} setTodos={setTodos} onRemove={handleRemove} />
    </div>
  );
}

export default App;
