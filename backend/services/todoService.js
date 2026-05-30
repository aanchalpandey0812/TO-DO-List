const Task = require("../models/taskModel");

const getAllTasks = async (
  search
) => {
  if (search) {
    return await Task.find({
      title: {
        $regex: search,
        $options: "i",
      },
    });
  }

  return await Task.find();
};

const createTask = async (
  data
) => {
  if (!data.title) {
    throw new Error(
      "Title is required"
    );
  }

  return await Task.create(data);
};

const updateTask = async (
  id,
  data
) => {
  return await Task.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
    }
  );
};

const deleteTask = async (
  id
) => {
  return await Task.findByIdAndDelete(
    id
  );
};

const updateStatus = async (
  id,
  status
) => {
  return await Task.findByIdAndUpdate(
    id,
    { status },
    {
      new: true,
    }
  );
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  updateStatus,
};