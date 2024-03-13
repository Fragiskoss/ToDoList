import React, { useState } from "react";

const TodoList = ({ todos, setTodos, onRemove }) => {
  const [editableIndex, setEditableIndex] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleToggleEdit = (index, text) => {
    setEditableIndex(index);
    setEditedText(text);
  };

  const handleSaveEdit = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = editedText;
    setTodos(updatedTodos);
    setEditableIndex(null);
    setEditedText("");
  };

  const handleCancelEdit = () => {
    setEditableIndex(null);
    setEditedText("");
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
    setEditableIndex(null);
    setEditedText("");
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggleComplete(index)}
          />
          {editableIndex === index ? (
            <>
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
              <button onClick={() => handleSaveEdit(index)}>Save</button>
              <button onClick={handleCancelEdit}>Cancel</button>
            </>
          ) : (
            <>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  color: todo.completed ? "#777" : "inherit",
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => handleToggleEdit(index, todo.text)}>
                Edit
              </button>
              <button onClick={() => onRemove(index)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
