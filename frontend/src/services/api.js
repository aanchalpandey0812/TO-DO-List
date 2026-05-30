import axios from "axios";

const API_URL =
  "http://localhost:5000/api";

const API = axios.create({
  baseURL: API_URL,
});

export const getTasks = (
  search = ""
) =>
  API.get(
    `/tasks?search=${search}`
  );

export const createTask = (
  taskData
) =>
  API.post(
    "/tasks",
    taskData
  );

export const updateTask = (
  id,
  updatedData
) =>
  API.put(
    `/tasks/${id}`,
    updatedData
  );

export const deleteTask = (
  id
) =>
  API.delete(`/tasks/${id}`);

export const updateStatus = (
  id,
  status
) =>
  API.patch(
    `/tasks/${id}/status`,
    { status }
  );