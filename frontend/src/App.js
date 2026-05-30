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
  updateStatus,
} from "./services/api";

function App() {
  const [tasks, setTasks] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async (
    searchText = ""
  ) => {
    try {
      setLoading(true);

      const { data } =
        await getTasks(searchText);

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

  const editTask = async (
    id,
    updatedData
  ) => {
    try {
      const { data } =
        await updateTask(
          id,
          updatedData
        );

      setTasks(
        tasks.map((task) =>
          task._id === id
            ? data
            : task
        )
      );
    } catch (err) {
      setError(
        "Failed to update task"
      );
    }
  };

  const toggleComplete = async (
    task
  ) => {
    try {
      const updatedStatus =
        task.status ===
        "completed"
          ? "pending"
          : "completed";

      const { data } =
        await updateStatus(
          task._id,
          updatedStatus
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

  const handleSearch = (e) => {
    const value = e.target.value;

    setSearch(value);

    fetchTasks(value);
  };

  return (
    <div className="container">
      <h1>To-Do List App</h1>

      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={handleSearch}
        className="search-input"
      />

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
        editTask={editTask}
      />
    </div>
  );
}

export default App;