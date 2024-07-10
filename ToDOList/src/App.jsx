import React, { useState, useEffect } from "react";
import "./App.css";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import CompletedTaskList from "./CompletedTaskList";

function App() {
  const [itemlist, setItemlist] = useState(
    JSON.parse(localStorage.getItem("itemlist")) || []
  );
  const [completedList, setCompletedList] = useState(
    JSON.parse(localStorage.getItem("completedList")) || []
  );

  useEffect(() => {
    localStorage.setItem("itemlist", JSON.stringify(itemlist));
  }, [itemlist]);

  useEffect(() => {
    localStorage.setItem("completedList", JSON.stringify(completedList));
  }, [completedList]);

  const addTask = (task) => {
    setItemlist([...itemlist, task]);
  };

  const editTask = (index, newValue) => {
    const updatedTasks = [...itemlist];
    updatedTasks[index] = newValue;
    setItemlist(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = itemlist.filter((_, i) => i !== index);
    setItemlist(updatedTasks);
  };

  const completeTask = (index) => {
    const completedTask = itemlist[index];
    deleteTask(index);
    setCompletedList([...completedList, completedTask]);
  };

  const deleteCompletedTask = (index) => {
    const updatedCompletedTasks = completedList.filter((_, i) => i !== index);
    setCompletedList(updatedCompletedTasks);
  };

  return (
    <div className="main-wrapper">
      <h1>To-Do List</h1>
      <TaskInput addTask={addTask} />
      <div id="current_tasks">
        {itemlist.length > 0 && <h1>Current tasks</h1>}
      </div>
      <TaskList
        tasks={itemlist}
        editTask={editTask}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
      <CompletedTaskList
        tasks={completedList}
        deleteTask={deleteCompletedTask}
      />
    </div>
  );
}

export default App;
