// import { useAuth } from '../contexts/AuthContext';
// import { useRouter } from 'next/router';
// import { useEffect } from 'react';

// const ProtectedRoute = (WrappedComponent: React.ComponentType) => {
//   return (props: any) => {
//     const { user } = useAuth();
//     const router = useRouter();

//     useEffect(() => {
//       if (!user) {
//         router.replace('/login');
//       }
//     }, [user, router]);

//     if (!user) {
//       return null;
//     }

//     return <WrappedComponent {...props} />;
//   };
// };

// export default ProtectedRoute;





// components/ProtectedRoute.tsx
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';

const ProtectedRoute = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.replace('/login');
      }
    }, [user, router]);

    if (!user) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default ProtectedRoute;