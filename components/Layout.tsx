import React from 'react';
import Sidebar from './Sidebar';
import TaskBoard from './TaskBoard';

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main-content">
    
        <TaskBoard />
      </main>
    </div>
  );
};

export default Layout;