// import React, { useState } from 'react';
// import { useAuth } from '../contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
// import styles from '../styles/Auth.module.css';

// const Signup: React.FC = () => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { signup } = useAuth();
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await signup(email, password, fullName);
//       router.push('/dashboard');
//     } catch (error) {
//       console.error('Signup failed:', error);
//       // Add error handling here (e.g., show error message to user)
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.formContainer}>
//         <h1 className={styles.title}>Welcome to <span className={styles.highlight}>Workflo</span>!</h1>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             placeholder="Full name"
//             required
//             className={styles.input}
//           />
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
//           <button type="submit" className={styles.button}>Sign up</button>
//         </form>
//         <p className={styles.link}>
//           Already have an account? <Link href="/login">Log in</Link>.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;






import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Auth.module.css';

const Signup: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signup } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await signup(email, password, fullName);
      router.push('/dashboard');
    } catch (error) {
      console.log(error);
      setError('Failed to create an account. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Welcome to <span className={styles.highlight}>Workflo</span>!</h1>
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full name"
            required
            className={styles.input}
          />
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
          <button type="submit" className={styles.button}>Sign up</button>
        </form>
        <p className={styles.link}>
          Already have an account? <Link href="/login">Log in</Link>.
        </p>
      </div>
    </div>
  );
};

export default Signup;