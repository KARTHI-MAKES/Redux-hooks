import React, { useCallback, useState } from 'react'
import ChildUseCallback from './childUseCallback'
import styles from './useCallback.module.css'

const ParentuseCallback = () => {
  const [searchedValue, setSearchedValue] = useState("");
  const [themeToggle, setThemeToggle] = useState(false)
  const handleSearch = useCallback((e) => {
    setSearchedValue(e.target.value)
    console.log("searchbrednered")
  }, []);
  const handleToggle = useCallback(() => {
    setThemeToggle((currentTheme) => !currentTheme)
    console.log("toggle renderd")
  }, [])

  return (
    <main className={`${styles.page} ${themeToggle ? styles.dark : ''}`}>
      <section className={styles.panel}>
        <p className={styles.eyebrow}>React hooks / 02</p>
        <h1 className={styles.title}>Callback lab</h1>
        <p className={styles.description}>
          Search in the memoized child and switch the surface theme without losing the input state.
        </p>
        <ChildUseCallback onSearch={handleSearch} searchedValue={searchedValue}/>
        <button className={styles.toggle} onClick={handleToggle}>
          {themeToggle ? 'Use light theme' : 'Use dark theme'}
        </button>
      </section>
    </main>
  )
}

export default ParentuseCallback;