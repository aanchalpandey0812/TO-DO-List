const todoService = require(
  "../services/todoService"
);

exports.getTasks = async (
  req,
  res
) => {
  try {
    const tasks =
      await todoService.getAllTasks(
        req.query.search
      );

    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.createTask = async (
  req,
  res
) => {
  try {
    const task =
      await todoService.createTask(
        req.body
      );

    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.updateTask = async (
  req,
  res
) => {
  try {
    const task =
      await todoService.updateTask(
        req.params.id,
        req.body
      );

    res.json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteTask = async (
  req,
  res
) => {
  try {
    await todoService.deleteTask(
      req.params.id
    );

    res.json({
      message:
        "Task deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateStatus = async (
  req,
  res
) => {
  try {
    const task =
      await todoService.updateStatus(
        req.params.id,
        req.body.status
      );

    res.json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};