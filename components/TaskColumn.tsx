// import React from 'react';
// import TaskCard from './TaskCard';

// interface Task {
//   title: string;
//   description: string;
//   priority: string;
//   date: string;
//   timeAgo: string;
// }

// interface TaskColumnProps {
//   title: string;
//   tasks: Task[];
// }

// const TaskColumn: React.FC<TaskColumnProps> = ({ title, tasks }) => {
//   return (
//     <div className="task-column">
//       <h2>{title}</h2>
//       {tasks.map((task, index) => (
//         <TaskCard key={index} {...task} />
//       ))}
//       <button className="add-task-btn">Add new +</button>
//     </div>
//   );
// };

// export default TaskColumn;





// import React from 'react';
// import TaskCard from './TaskCard';

// interface TaskColumnProps {
//   title: string;
//   tasks: any[];
//   onAddTask: () => void;
// }

// const TaskColumn: React.FC<TaskColumnProps> = ({ title, tasks, onAddTask }) => {
//   return (
//     <div className="task-column">
//       <h2>{title}</h2>
//       {tasks.map((task, index) => (
//         <TaskCard key={index} {...task} />
//       ))}
//       <button className="add-task-btn" onClick={onAddTask}>Add new +</button>
//     </div>
//   );
// };

// export default TaskColumn;














import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';

interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: 'Low' | 'Medium' | 'Urgent';
  deadline: string;
}

interface TaskColumnProps {
  title: string;
  tasks: Task[];
  onAddTask: () => void;
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, tasks, onAddTask }) => {
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
            >
              <TaskCard {...task} />
            </div>
          )}
        </Draggable>
      ))}
      <button className="add-task-btn" onClick={onAddTask}>Add new +</button>
    </div>
  );
};

export default TaskColumn;