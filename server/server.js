// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost/task-management', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Define Task Schema
// const taskSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   status: String,
//   priority: String,
//   deadline: Date,
// });

// const Task = mongoose.model('Task', taskSchema);

// // API Routes
// app.get('/api/tasks', async (req, res) => {
//   const tasks = await Task.find();
//   res.json(tasks);
// });

// app.post('/api/tasks', async (req, res) => {
//   const task = new Task(req.body);
//   await task.save();
//   res.json(task);
// });

// app.put('/api/tasks/:id', async (req, res) => {
//   const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.json(task);
// });

// app.delete('/api/tasks/:id', async (req, res) => {
//   await Task.findByIdAndDelete(req.params.id);
//   res.json({ message: 'Task deleted' });
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


















//--------------------------------------------------








const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/tasks_db')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Sample route
app.get('/', (req, res) => {
  console.log(req.body);
  res.json({ message: 'Welcome to the backend!' });
});

app.post('/tasks', (req, res) => {
  console.log(req.body.name);
  res.json({ message: 'Data save to DB!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
















