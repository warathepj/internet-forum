// Suggested code may be subject to a license. Learn more: ~LicenseLog:928137950.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1477489244.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3300283735.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:685633896.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3541837438.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2208232176.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3610440975.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2748106222.

// app/components/Login.js
import styles from './Login.module.css';
import { useState } from 'react';


export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Here you would typically make an API call to your backend to authenticate the user.

    // For now, let's just log the submitted credentials.
    console.log('Submitted credentials:', { username, password });

    // Reset the form fields
    setUsername('');
    setPassword('');
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}

            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
