// import React from 'react';
// import { FiHome, FiLayers, FiSettings, FiUsers, FiBarChart2, FiPlus, FiDownload } from 'react-icons/fi';

// const Sidebar: React.FC = () => {
//   return (
//     <aside className="sidebar">
//       <div className="user-info">
//         <img src="/avatar.png" alt="Joe Gardner" className="avatar" />
//         <span>Joe Gardner</span>
//         <button className="logout-btn">Logout</button>
//       </div>
//       <nav>
//         <ul>
//           <li><a href="#" className="active"><FiHome /> Home</a></li>
//           <li><a href="#"><FiLayers /> Boards</a></li>
//           <li><a href="#"><FiSettings /> Settings</a></li>
//           <li><a href="#"><FiUsers /> Teams</a></li>
//           <li><a href="#"><FiBarChart2 /> Analytics</a></li>
//           <button className="create-task-btn"><FiPlus /> Create new task</button>
//         </ul>
//       </nav>
//       <div className="download-app">
//         <FiDownload /> Download the app
//         <span>Get the full experience</span>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;











import React from 'react';
import { FiHome, FiLayers, FiSettings, FiUsers, FiBarChart2, FiPlus, FiDownload } from 'react-icons/fi';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="user-info">
        <img src="/avatar.png" alt="Joe Gardner" className="avatar" />
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
  );
};

export default Sidebar;