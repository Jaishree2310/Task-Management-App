import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import TaskModal from './TaskModal';
import { FiSearch, FiCalendar, FiZap, FiFilter, FiShare2, FiPlus, FiClock, FiEdit2, FiTrash2 } from 'react-icons/fi';

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'To do' | 'In progress' | 'Under review' | 'Finished';
  priority: 'Low' | 'Medium' | 'Urgent';
  deadline: string;
  createdAt: string;
}

const initialTasks: Task[] = [
  { id: '1', title: 'Implement User Authentication', description: 'Develop and integrate user authentication using email and password.', status: 'To do', priority: 'Urgent', deadline: '2024-08-15', createdAt: '2024-08-14T23:00:00Z' },
  { id: '2', title: 'Design Home Page UI', description: 'Develop and integrate user authentication using email and password.', status: 'In progress', priority: 'Medium', deadline: '2024-08-15', createdAt: '2024-08-14T23:00:00Z' },
  { id: '3', title: 'Conduct User Feedback Survey', description: 'Collect and analyze user feedback to improve app features.', status: 'In progress', priority: 'Low', deadline: '2024-08-05', createdAt: '2024-08-05T21:00:00Z' },
  { id: '4', title: 'Integrate Cloud Storage', description: 'Enable cloud storage for note backup and synchronization.', status: 'Under review', priority: 'Urgent', deadline: '2024-08-20', createdAt: '2024-08-18T22:00:00Z' },
  { id: '5', title: 'Test Cross-browser Compatibility', description: 'Ensure the app works seamlessly across different web browsers.', status: 'Finished', priority: 'Medium', deadline: '2024-07-30', createdAt: '2024-07-26T20:00:00Z' },
];

const TaskBoard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [selectedColumn, setSelectedColumn] = useState<Task['status'] | null>(null);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const newTasks = Array.from(tasks);
    const [reorderedItem] = newTasks.splice(source.index, 1);
    reorderedItem.status = destination.droppableId as Task['status'];
    newTasks.splice(destination.index, 0, reorderedItem);

    setTasks(newTasks);
  };

  const handleSaveTask = (taskData: Omit<Task, 'id' | 'createdAt'>) => {
    if (editingTask) {
      const updatedTasks = tasks.map(task =>
        task.id === editingTask.id ? { ...task, ...taskData } : task
      );
      setTasks(updatedTasks);
    } else {
      const newTask: Task = {
        ...taskData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      };
      setTasks([...tasks, newTask]);
    }
    setIsModalOpen(false);
    setEditingTask(null);
    setSelectedColumn(null);
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const getTimeAgo = (date: string) => {
    const now = new Date();
    const taskDate = new Date(date);
    const diffHours = Math.floor((now.getTime() - taskDate.getTime()) / (1000 * 60 * 60));
    
    if (diffHours < 24) return `${diffHours} hr ago`;
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays} days ago`;
  };

  const columns: Task['status'][] = ['To do', 'In progress', 'Under review', 'Finished'];

  return (
    <div className="task-board">
      <h1>Good morning, Joe!</h1>
      <div className="feature-cards">
        <div className="feature-card">
          <img src="/introducing-tags.png" alt="Introducing tags" />
          <h3>Introducing tags</h3>
          <p>Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient.</p>
        </div>
        <div className="feature-card">
          <img src="/share-notes.png" alt="Share Notes Instantly" />
          <h3>Share Notes Instantly</h3>
          <p>Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options.</p>
        </div>
        <div className="feature-card">
          <img src="/access-anywhere.png" alt="Access Anywhere" />
          <h3>Access Anywhere</h3>
          <p>Sync your notes across all devices. Stay productive whether you're on your phone, tablet, or computer.</p>
        </div>
      </div>
      <div className="action-bar">
        <div className="search-container">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        <button className="action-btn"><FiCalendar /> Calendar view</button>
        <button className="action-btn"><FiZap /> Automation</button>
        <button className="action-btn"><FiFilter /> Filter</button>
        <button className="action-btn"><FiShare2 /> Share</button>
        <button 
          className="create-new-btn" 
          onClick={() => {
            setEditingTask(null);
            setSelectedColumn(null);
            setIsModalOpen(true);
          }}
        >
          <FiPlus /> Create new
        </button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="columns">
          {columns.map((column) => (
            <Droppable key={column} droppableId={column}>
              {(provided) => (
                <div 
                  {...provided.droppableProps} 
                  ref={provided.innerRef} 
                  className="task-column"
                >
                  <h2>{column}</h2>
                  {tasks
                    .filter(task => task.status === column)
                    .map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="task-card"
                          >
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            <div className="task-meta">
                              <span className={`priority ${task.priority.toLowerCase()}`}>
                                {task.priority}
                              </span>
                              <span className="deadline">
                                <FiClock /> {task.deadline}
                              </span>
                            </div>
                            <span className="time-ago">{getTimeAgo(task.createdAt)}</span>
                            <div className="task-actions">
                              <button onClick={() => {
                                setEditingTask(task);
                                setIsModalOpen(true);
                              }}>
                                <FiEdit2 />
                              </button>
                              <button onClick={() => handleDeleteTask(task.id)}>
                                <FiTrash2 />
                              </button>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                  <button 
                    className="add-task-btn" 
                    onClick={() => {
                      setEditingTask(null);
                      setSelectedColumn(column);
                      setIsModalOpen(true);
                    }}
                  >
                    Add new
                  </button>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>

      <TaskModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingTask(null);
          setSelectedColumn(null);
        }}
        onSave={handleSaveTask}
        task={editingTask}
        initialStatus={selectedColumn || undefined}
      />
    </div>
  );
};

export default TaskBoard;