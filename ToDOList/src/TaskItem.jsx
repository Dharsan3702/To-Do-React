import React, { useState } from "react";

function TaskItem({ task, index, editTask, deleteTask, completeTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(index, newTask);
    setIsEditing(false);
  };

  const handleComplete = () => {
    completeTask(index);
  };

  return (
    <div className="list-container">
      <div className="list-item">
        {isEditing ? (
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onBlur={handleSave}
            onKeyDown={(e) => e.key === "Enter" && handleSave()}
          />
        ) : (
          <span>{task}</span>
        )}
      </div>
      <div className="item-actions">
        {!isEditing && <button onClick={handleEdit}>Edit</button>}
        <button
          onClick={() => deleteTask(index)}
          disabled={isEditing}
          className={isEditing ? "disabled-button" : ""}
        >
          Delete
        </button>
        <button
          onClick={handleComplete}
          className={isEditing ? "disabled" : ""}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
