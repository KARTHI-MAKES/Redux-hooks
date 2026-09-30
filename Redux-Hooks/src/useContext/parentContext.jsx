import { createContext, useContext, useMemo, useState } from 'react'
import styles from './context.module.css'

const ThemeContext = createContext(null)

function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false)
  const toggleTheme = () => setIsDark((current) => !current)
  const value = useMemo(() => ({ isDark, toggleTheme }), [isDark])

  return (
    <ThemeContext.Provider value={value}>
      <div className={`${styles.page} ${isDark ? styles.dark : ''}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

function ThemeControls() {
  const { isDark, toggleTheme } = useContext(ThemeContext)

  return (
    <button className={styles.toggle} type="button" onClick={toggleTheme}>
      <span className={styles.toggleIcon} aria-hidden="true">{isDark ? '☀' : '☾'}</span>
      Switch to {isDark ? 'light' : 'dark'} mode
    </button>
  )
}

function ThemeCard() {
  const { isDark } = useContext(ThemeContext)

  return (
    <section className={styles.card}>
      <div className={styles.cardMark} aria-hidden="true">✦</div>
      <div>
        <p className={styles.cardEyebrow}>A nested component</p>
        <h2>The theme travels through context.</h2>
        <p className={styles.cardCopy}>
          This card reads the current theme directly with <code>useContext</code>.
          No theme prop needs to pass through the component tree.
        </p>
        <span className={styles.status}>
          <span className={styles.statusDot} />
          {isDark ? 'Dark theme is active' : 'Light theme is active'}
        </span>
      </div>
    </section>
  )
}

function ThemeContent() {
  return (
    <main className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.brand}><span className={styles.brandIcon}>C</span> context lab</div>
        <span className={styles.lessonTag}>REACT HOOKS · 04</span>
      </header>

      <div className={styles.hero}>
        <p className={styles.eyebrow}>One shared value, many consumers</p>
        <h1>Let your app<br /><span>set the mood.</span></h1>
        <p className={styles.intro}>
          A theme provider makes the current appearance available to components
          anywhere below it in the tree.
        </p>
        <ThemeControls />
      </div>

      <ThemeCard />

      <footer className={styles.footer}>
        <span>Powered by <code>createContext</code> + <code>useContext</code></span>
        <span className={styles.footerDot} />
        <span>No prop drilling required</span>
      </footer>
    </main>
  )
}

export default function ParentContext() {
  return (
    <ThemeProvider>
      <ThemeContent />
    </ThemeProvider>
  )
}
