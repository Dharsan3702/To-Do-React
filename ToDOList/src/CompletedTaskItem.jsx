import React from "react";

function CompletedTaskItem({ task, index, deleteTask }) {
  return (
    <div className="list-container">
      <div className="list-item completed">{task}</div>
      <div className="item-actions">
        <button onClick={() => deleteTask(index)}>Delete</button>
      </div>
    </div>
  );
}

export default CompletedTaskItem;
