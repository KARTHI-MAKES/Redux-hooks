import { useLayoutEffect, useRef, useState } from 'react'
import styles from './useLayoutEffect.module.css'

export default function UseLayoutEffectExample() {
  const boxRef = useRef(null)
  const [expanded, setExpanded] = useState(false)
  const [height, setHeight] = useState(0)

  useLayoutEffect(() => {
    setHeight(Math.round(boxRef.current.getBoundingClientRect().height))
  }, [expanded])

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <p className={styles.eyebrow}>React hook demo</p>
        <h1>Measure before paint</h1>
        <p className={styles.description}>
          Click the button. The box changes size, then <code>useLayoutEffect</code>
          {' '}measures it before the browser paints.
        </p>

        <div className={styles.demoRow}>
          <div ref={boxRef} className={`${styles.box} ${expanded ? styles.expanded : ''}`}>
            {expanded ? 'I am taller now.' : 'Small box'}
          </div>
          <div className={styles.measurement} aria-live="polite">
            <span className={styles.measureLabel}>BOX HEIGHT</span>
            <strong>{height}<small>px</small></strong>
          </div>
        </div>

        <button className={styles.button} onClick={() => setExpanded((value) => !value)}>
          {expanded ? 'Make it small' : 'Make it taller'}
        </button>
      </section>
    </main>
  )
}
