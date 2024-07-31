// components/TaskBoard.tsx

import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import TaskModal from './TaskModal';
import { FiSearch, FiCalendar, FiZap, FiFilter, FiShare2, FiPlus, FiClock, FiEdit2, FiTrash2 } from 'react-icons/fi';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'To do' | 'In progress' | 'Under review' | 'Finished';
  priority: 'Low' | 'Medium' | 'Urgent';
  deadline: string;
  createdAt: string;
}

const TaskBoard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [selectedColumn, setSelectedColumn] = useState<Task['status'] | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchTasks();
    }
  }, [user]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleSaveTask = async (taskData: Omit<Task, 'id' | 'createdAt'>) => {
    try {
      if (editingTask) {
        const response = await axios.put(`http://localhost:5000/api/tasks/${editingTask.id}`, taskData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setTasks(tasks.map(task => task.id === editingTask.id ? response.data : task));
      } else {
        const response = await axios.post('http://localhost:5000/api/tasks', taskData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setTasks([...tasks, response.data]);
      }
      setIsModalOpen(false);
      setEditingTask(null);
      setSelectedColumn(null);
    } catch (error) {
      console.error('Error saving task:', error);
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${taskId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setTasks(tasks.filter(task => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const onDragEnd = (result: DropResult) => {
    // Implement drag and drop logic here
  };

  const columns: Task['status'][] = ['To do', 'In progress', 'Under review', 'Finished'];

  return (
    <div className="task-board">
      <h1>Good morning, {user?.email}!</h1>
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