const Task = require('../models/Task');

exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    next(err);
  }
};

exports.createTask = async (req, res, next) => {
  const { text } = req.body;

  try {
    const newTask = await Task.create({ text });
    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
};

exports.editTask = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedTask = await Task.findByIdAndUpdate(id, { text: req.body.text }, { new: true });
    if (!updatedTask) {
      res.status(404).json({ message: 'Task not found' });
      return;
    }
    res.status(200).json(updatedTask);
  } catch (err) {
    next(err);
  }
};

exports.deleteTask = async (req, res, next) => {
  const taskId = req.params.id;

  try {
    const deletedTask = await Task.findByIdAndDelete(taskId);
    if (!deletedTask) {
      res.status(404).json({ message: 'Task not found' });
      return;
    }
    res.status(200).json({ message: 'Task deleted' });
  } catch (err) {
    next(err);
  }
};
