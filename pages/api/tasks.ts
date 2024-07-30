import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';

// Connect to MongoDB
mongoose.connect('mongodb://localhost/task-management');

// Define Task Schema
const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  priority: String,
  deadline: Date,
});

const Task = mongoose.models.Task || mongoose.model('Task', taskSchema);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } else if (req.method === 'POST') {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } else if (req.method === 'PUT') {
    const { id } = req.query;
    const task = await Task.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(task);
  } else if (req.method === 'DELETE') {
    const { id } = req.query;
    await Task.findByIdAndDelete(id);
    res.status(200).json({ message: 'Task deleted' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}