// server/models/Task.ts
import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ['To do', 'In progress', 'Under review', 'Finished'], default: 'To do' },
  priority: { type: String, enum: ['Low', 'Medium', 'Urgent'], default: 'Medium' },
  deadline: { type: Date },
  createdAt: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Task = mongoose.model('Task', taskSchema);

export default Task;