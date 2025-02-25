import React from "react";

function Task({ task, onDelete }) {
  console.log(task)
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={() => onDelete(task.text)}>X</button>
    </div>
  );
}

export default Task;
