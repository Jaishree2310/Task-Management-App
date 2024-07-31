import React from 'react';
import { FiClock } from 'react-icons/fi';

interface TaskCardProps {
  title: string;
  description: string;
  priority: 'Low' | 'Medium' | 'Urgent';
  deadline: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, description, priority, deadline }) => {
  return (
    <div className="task-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="task-meta">
        <span className={`priority ${priority}`}>{priority}</span>
        <span className="deadline"><FiClock /> {deadline}</span>
      </div>
    </div>
  );
};

export default TaskCard;