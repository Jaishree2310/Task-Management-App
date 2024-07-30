// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// interface Task {
//   _id: string;
//   title: string;
//   description: string;
//   status: string;
//   priority: string;
//   deadline: string;
// }

// const TaskBoard: React.FC = () => {
//   const [tasks, setTasks] = useState<Task[]>([]);

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     const response = await axios.get('/api/tasks');
//     setTasks(response.data);
//   };

//   const addTask = async (task: Omit<Task, '_id'>) => {
//     await axios.post('/api/tasks', task);
//     fetchTasks();
//   };

//   const updateTask = async (id: string, updates: Partial<Task>) => {
//     await axios.put(`/api/tasks/${id}`, updates);
//     fetchTasks();
//   };

//   const deleteTask = async (id: string) => {
//     await axios.delete(`/api/tasks/${id}`);
//     fetchTasks();
//   };

//   return (
//     <div className="task-board">
//       {['To do', 'In progress', 'Under review', 'Finished'].map((status) => (
//         <div key={status} className="column">
//           <h2>{status}</h2>
//           {tasks
//             .filter((task) => task.status === status)
//             .map((task) => (
//               <div key={task._id} className="task">
//                 <h3>{task.title}</h3>
//                 <p>{task.description}</p>
//                 <p>Priority: {task.priority}</p>
//                 <p>Deadline: {task.deadline}</p>
//                 <button onClick={() => deleteTask(task._id)}>Delete</button>
//               </div>
//             ))}
//           <button onClick={() => addTask({ title: 'New Task', description: '', status, priority: 'Low', deadline: '' })}>
//             Add Task
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TaskBoard;













// import React from 'react';
// import TaskColumn from './TaskColumn';
// import TaskModal from './TaskModal';

// const TaskBoard: React.FC = () => {
//   const columns = [
//     { title: 'To do', tasks: [
//       { title: 'Implement User Authentication', description: 'Develop and integrate user authentication using email and password.', priority: 'Urgent', date: '2024-08-15', timeAgo: '1 hr ago' }
//     ]},
//     { title: 'In progress', tasks: [
//       { title: 'Design Home Page UI', description: 'Develop and integrate user authentication using email and password.', priority: 'Medium', date: '2024-08-15', timeAgo: '1 hr ago' },
//       { title: 'Conduct User Feedback Survey', description: 'Collect and analyze user feedback to improve app features.', priority: 'Low', date: '2024-08-05', timeAgo: '3 hr ago' }
//     ]},
//     { title: 'Under review', tasks: [
//       { title: 'Integrate Cloud Storage', description: 'Enable cloud storage for note backup and synchronization.', priority: 'Urgent', date: '2024-08-20', timeAgo: '2 days ago' }
//     ]},
//     { title: 'Finished', tasks: [
//       { title: 'Test Cross-browser Compatibility', description: 'Ensure the app works seamlessly across different web browsers.', priority: 'Medium', date: '2024-07-30', timeAgo: '4 days ago' }
//     ]},
//   ];

//   return (
//     <div className="task-board">
//       <div className="board-header">
//         <div className="board-actions">
//           <input type="text" placeholder="Search" className="search-input" />
//           <button className="action-btn">Calendar view</button>
//           <button className="action-btn">Automation</button>
//           <button className="action-btn">Filter</button>
//           <button className="action-btn">Share</button>
//         </div>
//         <button className="create-new-btn">Create new +</button>
//       </div>
//       <div className="columns-container">
//         {columns.map((column, index) => (
//           <TaskColumn key={index} title={column.title} tasks={column.tasks} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TaskBoard;




























// import React, { useState } from 'react';
// import TaskColumn from './TaskColumn';
// import TaskModal from './TaskModal';

// const TaskBoard: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [tasks, setTasks] = useState([
//     // ... your initial tasks here
//   ]);

//   const handleAddTask = (newTask: any) => {
//     setTasks([...tasks, newTask]);
//   };

//   return (
//     <div className="task-board">
//       <div className="board-header">
//         <div className="board-actions">
//           <input type="text" placeholder="Search" className="search-input" />
//           <button className="action-btn">Calendar view</button>
//           <button className="action-btn">Automation</button>
//           <button className="action-btn">Filter</button>
//           <button className="action-btn">Share</button>
//         </div>
//         <button className="create-new-btn" onClick={() => setIsModalOpen(true)}>Create new +</button>
//       </div>
//       <div className="columns-container">
//         {['To do', 'In progress', 'Under review', 'Finished'].map((columnTitle) => (
//           <TaskColumn
//             key={columnTitle}
//             title={columnTitle}
//             tasks={tasks.filter(task => task.status === columnTitle)}
//             onAddTask={() => setIsModalOpen(true)}
//           />
//         ))}
//       </div>
//       <TaskModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onSave={handleAddTask}
//       />
//     </div>
//   );
// };

// export default TaskBoard;









import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import TaskColumn from './TaskColumn';
import TaskModal from './TaskModal';
import { FiSearch, FiCalendar, FiZap, FiFilter, FiShare2 } from 'react-icons/fi';
import axios from 'axios';

interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: 'Low' | 'Medium' | 'Urgent';
  deadline: string;
}

const TaskBoard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleAddTask = async (newTask: Omit<Task, 'id'>) => {
    try {
      const response = await axios.post('/api/tasks', newTask);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleDragEnd = async (result: DropResult) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const updatedTasks = Array.from(tasks);
    const [reorderedTask] = updatedTasks.splice(source.index, 1);
    updatedTasks.splice(destination.index, 0, reorderedTask);

    const updatedTask = {
      ...reorderedTask,
      status: destination.droppableId
    };

    setTasks(updatedTasks);

    try {
      await axios.put(`/api/tasks/${updatedTask.id}`, updatedTask);
    } catch (error) {
      console.error('Error updating task:', error);
      // Revert changes if update fails
      setTasks(tasks);
    }
  };

  const columns = ['To do', 'In progress', 'Under review', 'Finished'];

  return (
    <div className="task-board">
      <div className="board-header">
        <div className="board-actions">
          <div className="search-container">
            <FiSearch className="search-icon" />
            <input type="text" placeholder="Search" className="search-input" />
          </div>
          <button className="action-btn"><FiCalendar /> Calendar view</button>
          <button className="action-btn"><FiZap /> Automation</button>
          <button className="action-btn"><FiFilter /> Filter</button>
          <button className="action-btn"><FiShare2 /> Share</button>
        </div>
        <button className="create-new-btn" onClick={() => setIsModalOpen(true)}>Create new +</button>
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="columns-container">
          {columns.map((columnTitle) => (
            <Droppable key={columnTitle} droppableId={columnTitle}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <TaskColumn
                    title={columnTitle}
                    tasks={tasks.filter(task => task.status === columnTitle)}
                    onAddTask={() => setIsModalOpen(true)}
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddTask}
      />
    </div>
  );
};

export default TaskBoard;