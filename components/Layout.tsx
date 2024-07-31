// import React from 'react';
// import Sidebar from './Sidebar';
// import TaskBoard from './TaskBoard';

// const Layout: React.FC = () => {
//   return (
//     <div className="layout">
//       <Sidebar />
//       <main className="main-content">
    
//         <TaskBoard />
//       </main>
//     </div>
//   );
// };

// export default Layout;









import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;