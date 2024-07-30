import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="user-info">
        <img src="/avatar.png" alt="User Avatar" className="avatar" />
        <span>Joe Gardner</span>
      </div>
      <nav>
        <ul>
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">Boards</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Teams</a></li>
          <li><a href="#">Analytics</a></li>
        </ul>
      </nav>
      <button className="create-task-btn">Create new task +</button>
      <div className="download-app">
        <a href="#">
          <i className="download-icon"></i>
          Download the app
        </a>
        <span>Get the full experience</span>
      </div>
    </aside>
  );
};

export default Sidebar;