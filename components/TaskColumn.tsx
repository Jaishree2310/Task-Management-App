import React from 'react';
import { FiClock, FiPlus } from 'react-icons/fi';

interface Task {
  title: string;
  description: string;
  priority: 'Urgent' | 'Medium' | 'Low';
  deadline: string;
  timeAgo: string;
}

interface TaskColumnProps {
  title: string;
  tasks: Task[];
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, tasks }) => {
  return (
    <div className="task-column">
      <h2>{title}</h2>
      {tasks.map((task, index) => (
        <div key={index} className="task-card">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <div className="task-meta">
            <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span>
            <span className="deadline"><FiClock /> {task.deadline}</span>
          </div>
          <span className="time-ago">{task.timeAgo}</span>
        </div>
      ))}
      <button className="add-task-btn"><FiPlus /> Add new</button>
    </div>
  );
};

export default TaskColumn;




















