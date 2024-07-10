import React, { useState } from "react";

function TaskInput({ addTask }) {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.trim()) {
      addTask(task);
      setTask("");
    } else {
      alert("Please enter a task.");
    }
  };

  return (
    <div className="action-wrapper">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add new tasks..."
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TaskInput;
