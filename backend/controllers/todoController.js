const Todo = require("../models/todoModel");

const getTasks = async (req, res) => {
  try {
    const tasks = await Todo.find();

    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Todo.create(req.body);

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  getTasks,
  createTask
};