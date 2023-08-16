const Task = require('../models/Task');

exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
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

exports.editTask = async(req, res) =>{
  const id = req.params.id;

  try {
    const updatedTask = await Task.findByIdAndUpdate(id, { text: req.body.text }, { new: true });
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteTask = async (req, res, next) => {
  const taskId = req.params.id;

  try {
    await Task.findByIdAndDelete(taskId);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    next(err);
  }
};
