import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          category={task.category}
          onDelete={() => onDelete(task)}
        />
      ))}
    </div>
  );
}

export default TaskList;
