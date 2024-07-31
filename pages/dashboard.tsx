import TaskBoard from '../components/TaskBoard';
import ProtectedRoute from '../components/ProtectedRoute';

const Dashboard = () => {
  return <TaskBoard />;
};

export default ProtectedRoute(Dashboard);