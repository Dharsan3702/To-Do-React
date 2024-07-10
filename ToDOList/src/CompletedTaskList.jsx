import React from "react";
import CompletedTaskItem from "./CompletedTaskItem";

function CompletedTaskList({ tasks, deleteTask }) {
  return (
    <div id="completed_list_container" className="completed-wrapper">
      {tasks.length > 0 && <h1>Completed Tasks</h1>}
      {tasks.map((task, index) => (
        <CompletedTaskItem
          key={index}
          task={task}
          index={index}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default CompletedTaskList;
