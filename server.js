require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  status: { type: String, enum: ['To do', 'In progress', 'Under review', 'Finished'], default: 'To do' },
  priority: { type: String, enum: ['Low', 'Medium', 'Urgent'], default: 'Low' },
  deadline: String,
  createdAt: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Task = mongoose.model('Task', taskSchema);

// Get all tasks for a user
app.get('/api/tasks', async (req, res) => {
  try {
    // In a real application, you would get the userId from the authenticated user
    const userId = '60d5ecb74c3f7c2d6c9e1b6e'; // Example userId
    const tasks = await Task.find({ userId });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks' });
  }
});

// Create a new task
app.post('/api/tasks', async (req, res) => {
  try {
    const userId = '60d5ecb74c3f7c2d6c9e1b6e'; // Example userId
    const newTask = new Task({ ...req.body, userId });
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(400).json({ message: 'Error creating task' });
  }
});

// Update a task
app.put('/api/tasks/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: 'Error updating task' });
  }
});

// Delete a task
app.delete('/api/tasks/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting task' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});