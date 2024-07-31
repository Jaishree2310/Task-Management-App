// import React from 'react';
// import Layout from '../components/Layout';
// import TaskBoard from '../components/TaskBoard';

// const Home: React.FC = () => {
//   return (
//     <Layout>
//       <TaskBoard />
//     </Layout>
//   );
// };

// export default Home;



import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthContext';

const Home = () => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    } else {
      router.push('/dashboard');
    }
  }, [user, router]);

  return null;
};

export default Home;