import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  const allTasks = tasks.map((task) => (
    <Task key={task.text} task={task} onDelete={() => onDeleteTask(task.text)} />
  ));

  return (
    <div className="tasks">
      {allTasks}
    </div>
  );
}

export default TaskList;
