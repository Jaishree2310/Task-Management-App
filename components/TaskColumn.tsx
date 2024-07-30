

import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { FiClock } from 'react-icons/fi';

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'To do' | 'In progress' | 'Under review' | 'Finished';
  priority: 'Low' | 'Medium' | 'Urgent';
  deadline: string;
  createdAt: string;
}

interface TaskColumnProps {
  title: Task['status'];
  tasks: Task[];
  onAddTask: () => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: string) => void;
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, tasks, onAddTask, onEditTask, onDeleteTask }) => {
  const getTimeAgo = (date: string) => {
    const now = new Date();
    const taskDate = new Date(date);
    const diffInHours = Math.floor((now.getTime() - taskDate.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 24) {
      return `${diffInHours} hr ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays} days ago`;
    }
  };

  return (
    <div className="task-column">
      <h2>{title}</h2>
      {tasks.map((task, index) => (
        <Draggable key={task.id} draggableId={task.id} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className="task-card"
              onClick={() => onEditTask(task)}
            >
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <div className="task-meta">
                <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span>
                <span className="deadline"><FiClock /> {task.deadline}</span>
              </div>
              <span className="time-ago">{getTimeAgo(task.createdAt)}</span>
            </div>
          )}
        </Draggable>
      ))}
      <button className="add-task-btn" onClick={onAddTask}>Add new +</button>
    </div>
  );
};

export default TaskColumn;