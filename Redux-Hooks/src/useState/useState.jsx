import { useState } from 'react';
import styles from './useState.module.css';

function UseState() {
  const [count, setCount] = useState(0);

  return (
    <main className={styles.counter}>
      <h1>Counter</h1>
      <p className={styles.counterValue} aria-live="polite">
        Count: {count}
      </p>

      <div className={styles.buttons}>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </main>
  );
}

export default UseState;