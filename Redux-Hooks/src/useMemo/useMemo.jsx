import { useMemo, useState } from 'react';
import styles from '../useState/useState.module.css';

function UseMemo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const count1Squared = useMemo(() => {
    console.log('Calculating Counter 1 rendered');
    return count1 * count1;
  }, [count1]);
   const count1Squared2 = useMemo(() => {
    console.log('Calculating Counter 2 rendered');
    return count2 * count2;
  }, [count2]);

  return (
    <main className={styles.counter}>
      <h1>Counter 1</h1>
      <p className={styles.counterValue}>Count: {count1}</p>
      <p>Counter 1 squared: {count1Squared}</p>

      <div className={styles.buttons}>
        <button onClick={() => setCount1(count1 + 1)}>Increment</button>
        <button onClick={() => setCount1(count1 - 1)}>Decrement</button>
        <button onClick={() => setCount1(0)}>Reset</button>
      </div>

      <h1>Counter 2</h1>
      <p className={styles.counterValue}>Count: {count2}</p>
   <p>Counter 2 squared: {count1Squared2}</p>
      <div className={styles.buttons}>
        <button onClick={() => setCount2(count2 + 1)}>Increment</button>
        <button onClick={() => setCount2(count2 - 1)}>Decrement</button>
        <button onClick={() => setCount2(0)}>Reset</button>
      </div>
    </main>
  );
}

export default UseMemo;