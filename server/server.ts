// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import authRoutes from './routes/auth';
// import taskRoutes from './routes/tasks'; // We'll create this next

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/taskmanagement', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// } as mongoose.ConnectOptions);

// app.use('/api/auth', authRoutes);
// app.use('/api/tasks', taskRoutes);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });






import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import taskRoutes from './routes/tasks';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI as string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions);

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});