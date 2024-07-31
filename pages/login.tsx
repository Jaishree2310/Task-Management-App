// import React, { useState } from 'react';
// import { useAuth } from '../contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
// import styles from '../styles/Auth.module.css';

// const Login: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { login } = useAuth();
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await login(email, password);
//       router.push('/dashboard');
//     } catch (error) {
//       console.error('Login failed:', error);
//       // Add error handling here (e.g., show error message to user)
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.formContainer}>
//         <h1 className={styles.title}>Welcome to <span className={styles.highlight}>Workflo</span>!</h1>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Your email"
//             required
//             className={styles.input}
//           />
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//             required
//             className={styles.input}
//           />
//           <button type="submit" className={styles.button}>Login</button>
//         </form>
//         <p className={styles.link}>
//           Don't have an account? <Link href="/signup">Create a new account</Link>.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;




import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Auth.module.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      router.push('/taskboard');
    } catch (error) {
      setError('Failed to log in. Please check your credentials.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Welcome to <span className={styles.highlight}>Workflo</span>!</h1>
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
            className={styles.input}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className={styles.input}
          />
          <button type="submit" className={styles.button}>Login</button>
        </form>
        <p className={styles.link}>
          Don't have an account? <Link href="/signup">Create a new account</Link>.
        </p>
      </div>
    </div>
  );
};

export default Login;