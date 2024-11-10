import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  return (
    <div className="tasks">
      {tasks.length === 0 ? (
        <div>No tasks available</div>
      ) : (
        tasks.map((task) => (
          <Task
            key={task.id} // Ensure each task has a unique key
            task={task}
            onDelete={onDelete} // Assuming you want to handle delete as well
          />
        ))
      )}
    </div>
  );
}

export default TaskList;

