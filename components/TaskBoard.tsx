
// import React, { useState, useEffect } from 'react';
// import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
// import { FiDownload, FiSearch, FiCalendar, FiZap, FiFilter, FiShare2, FiPlus, FiClock, FiHome, FiLayers, FiSettings, FiUsers, FiBarChart2, FiHelpCircle, FiLogOut } from 'react-icons/fi';
// import axios from 'axios';

// interface Task {
//   id: string;
//   title: string;
//   description: string;
//   status: 'To do' | 'In progress' | 'Under review' | 'Finished';
//   priority: 'Low' | 'Medium' | 'Urgent';
//   deadline: string;
//   createdAt: string;
// }

// const TaskBoard: React.FC = () => {
//   const [tasks, setTasks] = useState<Task[]>([]);

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     // Simulating API call
//     const mockTasks: Task[] = [
//       { id: '1', title: 'Implement User Authentication', description: 'Develop and integrate user authentication using email and password.', status: 'To do', priority: 'Urgent', deadline: '2024-08-15', createdAt: '2024-08-14T12:00:00Z' },
//       { id: '2', title: 'Design Home Page UI', description: 'Develop and integrate user authentication using email and password.', status: 'In progress', priority: 'Medium', deadline: '2024-08-15', createdAt: '2024-08-14T13:00:00Z' },
//       { id: '3', title: 'Conduct User Feedback Survey', description: 'Collect and analyze user feedback to improve app features.', status: 'In progress', priority: 'Low', deadline: '2024-08-05', createdAt: '2024-08-05T11:00:00Z' },
//       { id: '4', title: 'Integrate Cloud Storage', description: 'Enable cloud storage for note backup and synchronization.', status: 'Under review', priority: 'Urgent', deadline: '2024-08-20', createdAt: '2024-08-18T10:00:00Z' },
//       { id: '5', title: 'Test Cross-browser Compatibility', description: 'Ensure the app works seamlessly across different web browsers.', status: 'Finished', priority: 'Medium', deadline: '2024-07-30', createdAt: '2024-07-26T09:00:00Z' },
//     ];
//     setTasks(mockTasks);
//   };

//   const handleDragEnd = (result: DropResult) => {
//     if (!result.destination) return;

//     const items = Array.from(tasks);
//     const [reorderedItem] = items.splice(result.source.index, 1);
//     items.splice(result.destination.index, 0, reorderedItem);

//     setTasks(items);
//   };

//   const getTimeAgo = (date: string) => {
//     const now = new Date();
//     const taskDate = new Date(date);
//     const diffHours = Math.floor((now.getTime() - taskDate.getTime()) / (1000 * 60 * 60));
    
//     if (diffHours < 24) return `${diffHours} hr ago`;
//     const diffDays = Math.floor(diffHours / 24);
//     return `${diffDays} days ago`;
//   };

//   return (
//     <div className="task-board">
//       <aside className="sidebar">
//         <div className="user-info">
//           <img src="/avatar.jpg" alt="Joe Gardner" className="avatar" />
//           <span>Joe Gardner</span>
//           <button className="logout-btn"><FiLogOut /> Logout</button>
//         </div>
//         <nav>
//           <ul>
//             <li><a href="#" className="active"><FiHome /> Home</a></li>
//             <li><a href="#"><FiLayers /> Boards</a></li>
//             <li><a href="#"><FiSettings /> Settings</a></li>
//             <li><a href="#"><FiUsers /> Teams</a></li>
//             <li><a href="#"><FiBarChart2 /> Analytics</a></li>
//           </ul>
//         </nav>
//         <button className="create-task-btn"><FiPlus /> Create new task</button>
//         <div className="download-app">
//           <FiDownload /> Download the app
//           <span>Get the full experience</span>
//         </div>
//       </aside>
//       <main>
//         <header>
//           <h1>Good morning, Joe!</h1>
//           <div className="header-actions">
//             <button><FiHelpCircle /> Help & feedback</button>
//           </div>
//         </header>
//         <div className="search-bar">
//           <FiSearch />
//           <input type="text" placeholder="Search" />
//           <button><FiCalendar /> Calendar view</button>
//           <button><FiZap /> Automation</button>
//           <button><FiFilter /> Filter</button>
//           <button><FiShare2 /> Share</button>
//           <button className="create-new-btn"><FiPlus /> Create new</button>
//         </div>
//         <DragDropContext onDragEnd={handleDragEnd}>
//           <div className="columns">
//             {['To do', 'In progress', 'Under review', 'Finished'].map((status) => (
//               <Droppable key={status} droppableId={status}>
//                 {(provided) => (
//                   <div {...provided.droppableProps} ref={provided.innerRef} className="column">
//                     <h2>{status}</h2>
//                     {tasks.filter(task => task.status === status).map((task, index) => (
//                       <Draggable key={task.id} draggableId={task.id} index={index}>
//                         {(provided) => (
//                           <div
//                             ref={provided.innerRef}
//                             {...provided.draggableProps}
//                             {...provided.dragHandleProps}
//                             className="task-card"
//                           >
//                             <h3>{task.title}</h3>
//                             <p>{task.description}</p>
//                             <div className="task-meta">
//                               <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span>
//                               <span className="deadline"><FiClock /> {task.deadline}</span>
//                             </div>
//                             <span className="time-ago">{getTimeAgo(task.createdAt)}</span>
//                           </div>
//                         )}
//                       </Draggable>
//                     ))}
//                     {provided.placeholder}
//                     <button className="add-task-btn">Add new +</button>
//                   </div>
//                 )}
//               </Droppable>
//             ))}
//           </div>
//         </DragDropContext>
//       </main>
//     </div>
//   );
// };

// export default TaskBoard;



















import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { FiSearch, FiCalendar, FiZap, FiFilter, FiShare2, FiPlus, FiClock, FiHome, FiLayers, FiSettings, FiUsers, FiBarChart2, FiHelpCircle, FiLogOut, FiDownload } from 'react-icons/fi';

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

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    // Simulating API call
    const mockTasks: Task[] = [
      { id: '1', title: 'Implement User Authentication', description: 'Develop and integrate user authentication using email and password.', status: 'To do', priority: 'Urgent', deadline: '2024-08-15', createdAt: '2024-08-14T23:00:00Z' },
      { id: '2', title: 'Design Home Page UI', description: 'Develop and integrate user authentication using email and password.', status: 'In progress', priority: 'Medium', deadline: '2024-08-15', createdAt: '2024-08-14T23:00:00Z' },
      { id: '3', title: 'Conduct User Feedback Survey', description: 'Collect and analyze user feedback to improve app features.', status: 'In progress', priority: 'Low', deadline: '2024-08-05', createdAt: '2024-08-05T21:00:00Z' },
      { id: '4', title: 'Integrate Cloud Storage', description: 'Enable cloud storage for note backup and synchronization.', status: 'Under review', priority: 'Urgent', deadline: '2024-08-20', createdAt: '2024-08-18T22:00:00Z' },
      { id: '5', title: 'Test Cross-browser Compatibility', description: 'Ensure the app works seamlessly across different web browsers.', status: 'Finished', priority: 'Medium', deadline: '2024-07-30', createdAt: '2024-07-26T20:00:00Z' },
    ];
    setTasks(mockTasks);
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, {...reorderedItem, status: result.destination.droppableId as Task['status']});

    setTasks(items);
  };

  const getTimeAgo = (date: string) => {
    const now = new Date();
    const taskDate = new Date(date);
    const diffHours = Math.floor((now.getTime() - taskDate.getTime()) / (1000 * 60 * 60));
    
    if (diffHours < 24) return `${diffHours} hr ago`;
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays} days ago`;
  };

  return (
    <div className="task-board">
      <aside className="sidebar">
        <div className="user-info">
          <img src="/joe-avatar.png" alt="Joe Gardner" className="avatar" />
          <span>Joe Gardner</span>
          <button className="logout-btn">Logout</button>
        </div>
        <nav>
          <ul>
            <li><a href="#" className="active"><FiHome /> Home</a></li>
            <li><a href="#"><FiLayers /> Boards</a></li>
            <li><a href="#"><FiSettings /> Settings</a></li>
            <li><a href="#"><FiUsers /> Teams</a></li>
            <li><a href="#"><FiBarChart2 /> Analytics</a></li>
          </ul>
        </nav>
        <button className="create-task-btn"><FiPlus /> Create new task</button>
        <div className="download-app">
          <FiDownload /> Download the app
          <span>Get the full experience</span>
        </div>
      </aside>
      <main>
        <header>
          <h1>Good morning, Joe!</h1>
          <div className="header-actions">
            <button><FiHelpCircle /> Help & feedback</button>
            <button className="logout-btn">Logout</button>
          </div>
        </header>
        <div className="search-bar">
          <div className="search-input">
            <FiSearch />
            <input type="text" placeholder="Search" />
          </div>
          <button><FiCalendar /> Calendar view</button>
          <button><FiZap /> Automation</button>
          <button><FiFilter /> Filter</button>
          <button><FiShare2 /> Share</button>
          <button className="create-new-btn"><FiPlus /> Create new</button>
        </div>
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="columns">
            {['To do', 'In progress', 'Under review', 'Finished'].map((status) => (
              <Droppable key={status} droppableId={status}>
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef} className="column">
                    <h2>{status}</h2>
                    {tasks.filter(task => task.status === status).map((task, index) => (
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
                              <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span>
                              <span className="deadline"><FiClock /> {task.deadline}</span>
                            </div>
                            <span className="time-ago">{getTimeAgo(task.createdAt)}</span>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                    <button className="add-task-btn">Add new +</button>
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </DragDropContext>
      </main>
    </div>
  );
};

export default TaskBoard;