const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/taskmanager', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  priority: String,
  deadline: String,
});

const Task = mongoose.model('Task', TaskSchema);

app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks' });
  }
});

app.post('/api/tasks', async (req, res) => {
  try {
    const newTask = new Task(req.body);
    const savedTask = await newTask.save();
    res.json(savedTask);
  } catch (error) {
    res.status(500).json({ message: 'Error creating task' });
  }
});

app.put('/api/tasks/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: 'Error updating task' });
  }
});

app.delete('/api/tasks/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting task' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});