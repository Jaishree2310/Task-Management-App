// import express from 'express';
// import Task from '../models/Task';
// import auth from '../middleware/auth';

// const router = express.Router();

// // Get all tasks for a user
// router.get('/', auth, async (req, res) => {
//   try {
//     const tasks = await Task.find({ user: req.userId });
//     res.json(tasks);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching tasks' });
//   }
// });

// // Create a new task
// router.post('/', auth, async (req, res) => {
//   try {
//     const newTask = new Task({ ...req.body, user: req.userId });
//     await newTask.save();
//     res.status(201).json(newTask);
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating task' });
//   }
// });

// // Update a task
// router.put('/:id', auth, async (req, res) => {
//   try {
//     const updatedTask = await Task.findOneAndUpdate(
//       { _id: req.params.id, user: req.userId },
//       req.body,
//       { new: true }
//     );
//     if (!updatedTask) {
//       return res.status(404).json({ message: 'Task not found' });
//     }
//     res.json(updatedTask);
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating task' });
//   }
// });

// // Delete a task
// router.delete('/:id', auth, async (req, res) => {
//   try {
//     const deletedTask = await Task.findOneAndDelete({ _id: req.params.id, user: req.userId });
//     if (!deletedTask) {
//       return res.status(404).json({ message: 'Task not found' });
//     }
//     res.json({ message: 'Task deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting task' });
//   }
// });

// export default router;




import express, { Request, Response } from 'express';
import Task from '../models/Task';
import auth from '../middleware/auth';

interface AuthRequest extends Request {
  userId?: string;
}

const router = express.Router();

// Get all tasks for a user
router.get('/', auth, async (req: AuthRequest, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ message: 'User not authenticated' });
    }
    const tasks = await Task.find({ user: req.userId });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks' });
  }
});

// Create a new task
router.post('/', auth, async (req: AuthRequest, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ message: 'User not authenticated' });
    }
    const newTask = new Task({ ...req.body, user: req.userId });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: 'Error creating task' });
  }
});

// Update a task
router.put('/:id', auth, async (req: AuthRequest, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ message: 'User not authenticated' });
    }
    const updatedTask = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      req.body,
      { new: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: 'Error updating task' });
  }
});

// Delete a task
router.delete('/:id', auth, async (req: AuthRequest, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ message: 'User not authenticated' });
    }
    const deletedTask = await Task.findOneAndDelete({ _id: req.params.id, user: req.userId });
    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting task' });
  }
});

export default router;