import React from "react";
import { FaTrash, FaCheck } from "react-icons/fa";

const TaskItem = ({
  task,
  deleteTask,
  toggleComplete,
}) => {
  return (
    <div
      className={`task-card ${
        task.completed ? "completed" : ""
      }`}
    >
      <div>
        <h3>{task.title}</h3>

        <p>{task.description}</p>
      </div>

      <div className="task-actions">
        <button
          onClick={() =>
            toggleComplete(task)
          }
        >
          <FaCheck />
        </button>

        <button
          onClick={() =>
            deleteTask(task._id)
          }
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;