import React, { useState } from "react";

const AddTodo = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddClick = () => {
    if (task.trim() !== "") {
      onAdd({ text: task, completed: false });
      setTask("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddClick();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
};

export default AddTodo;
