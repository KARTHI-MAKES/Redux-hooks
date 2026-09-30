import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './useEffect.module.css';

function UseEffectExample() {
  const [users, setUsers] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch {
        setError('Could not load users. Please try again.');
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return (
    <main className={styles.page}>
      <section className={styles.panel} aria-labelledby="users-title">
        <p className={styles.eyebrow}>useEffect practice</p>
        <h1 className={styles.title} id="users-title">User directory</h1>
        <p className={styles.description}>Current time and users loaded from an API.</p>

        <div className={styles.clock} aria-live="polite">
          <span className={styles.clockLabel}>Current time</span>
          <time>{currentTime.toLocaleTimeString()}</time>
        </div>

        {loading ? (
          <p className={styles.message} role="status">Loading users...</p>
        ) : error ? (
          <p className={styles.error} role="alert">{error}</p>
        ) : (
          <>
            <p className={styles.summary}>{users.length} users</p>
            <ul className={styles.list}>
              {users.map((user) => (
                <li className={styles.user} key={user.id}>
                  <span className={styles.avatar} aria-hidden="true">
                    {user.name.charAt(0)}
                  </span>
                  <span className={styles.details}>
                    <strong>{user.name}</strong>
                    <span>@{user.username}</span>
                  </span>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </main>
  );
}

export default UseEffectExample;
