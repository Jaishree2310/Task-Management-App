import React from 'react';
import Layout from '../components/Layout';
import TaskBoard from '../components/TaskBoard';

const Home: React.FC = () => {
  return (
    <Layout>
      <TaskBoard />
    </Layout>
  );
};

export default Home;