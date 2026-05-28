import React from "react";

import TaskItem from "./TaskItem";

const TaskList = ({
  tasks,
  deleteTask,
  toggleComplete,
}) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <h2>No Tasks Found</h2>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;