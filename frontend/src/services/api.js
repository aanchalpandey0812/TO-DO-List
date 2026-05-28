import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const getTasks = () => API.get("/");

export const createTask = (taskData) =>
  API.post("/", taskData);

export const updateTask = (id, taskData) =>
  API.put(`/${id}`, taskData);

export const deleteTask = (id) =>
  API.delete(`/${id}`);