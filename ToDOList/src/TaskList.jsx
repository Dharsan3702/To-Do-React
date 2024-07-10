import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, editTask, deleteTask, completeTask }) {
  return (
    <div id="item_list_container" className="list-wrapper">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          editTask={editTask}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
