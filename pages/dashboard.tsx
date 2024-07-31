import TaskBoard from '../components/TaskBoard';
import ProtectedRoute from '../components/ProtectedRoute';
import React from 'react';

const Dashboard = () => {
  return <TaskBoard />;
};

export default ProtectedRoute(Dashboard);


