import React, {
  useEffect,
  useState,
} from "react";

import "./App.css";

import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "./services/api";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);

      const { data } =
        await getTasks();

      setTasks(data);
    } catch (err) {
      setError(
        "Failed to fetch tasks"
      );
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (
    taskData
  ) => {
    try {
      const { data } =
        await createTask(taskData);

      setTasks([data, ...tasks]);
    } catch (err) {
      setError(
        "Failed to add task"
      );
    }
  };

  const removeTask = async (
    id
  ) => {
    try {
      await deleteTask(id);

      setTasks(
        tasks.filter(
          (task) => task._id !== id
        )
      );
    } catch (err) {
      setError(
        "Failed to delete task"
      );
    }
  };

  const toggleComplete = async (
    task
  ) => {
    try {
      const updatedTask = {
        ...task,
        completed:
          !task.completed,
      };

      const { data } =
        await updateTask(
          task._id,
          updatedTask
        );

      setTasks(
        tasks.map((t) =>
          t._id === task._id
            ? data
            : t
        )
      );
    } catch (err) {
      setError(
        "Failed to update task"
      );
    }
  };

  return (
    <div className="container">
      <h1>To-Do List App</h1>

      <AddTask
        addTask={addTask}
      />

      {loading && (
        <h2>Loading...</h2>
      )}

      {error && (
        <h3 className="error">
          {error}
        </h3>
      )}

      <TaskList
        tasks={tasks}
        deleteTask={removeTask}
        toggleComplete={
          toggleComplete
        }
      />
    </div>
  );
}

export default App;