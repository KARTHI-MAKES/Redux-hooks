import { useRef, useState } from 'react';
import styles from './debounceSearch.module.css';

const options = [
  { id: 1, name: 'John' },
  { id: 2, name: 'David' },
  { id: 3, name: 'Michael' },
  { id: 4, name: 'Robert' },
  { id: 5, name: 'James' },
  { id: 6, name: 'William' },
  { id: 7, name: 'Daniel' },
  { id: 8, name: 'Thomas' },
  { id: 9, name: 'Joseph' },
  { id: 10, name: 'Christopher' },
];

function DebounceSearch() {
  const [searchValue, setSearchValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  const debouncedSearch = useRef(
    debounce((value) => setDebouncedValue(value), 3000)
  ).current;

  function handleChange(event) {
    const value = event.target.value;
    setSearchValue(value);
    debouncedSearch(value);
  }

  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(debouncedValue.toLowerCase())
  );

  return (
    <main className={styles.page}>
      <section className={styles.card} aria-labelledby="search-title">
        <p className={styles.eyebrow}>Debounce practice</p>
        <h1 className={styles.title} id="search-title">Search names</h1>
        <p className={styles.description}>Results update 300 ms after you stop typing.</p>

        <label className={styles.label} htmlFor="name-search">Name</label>
        <input
          id="name-search"
          className={styles.input}
          type="search"
          value={searchValue}
          onChange={handleChange}
          placeholder="Start typing a name..."
        />

        <ul className={styles.results} aria-live="polite">
          {filteredOptions.length ? (
            filteredOptions.map((option) => (
              <li className={styles.result} key={option.id}>{option.name}</li>
            ))
          ) : (
            <li className={styles.empty}>No matching names found.</li>
          )}
        </ul>
      </section>
    </main>
  );
}

function debounce(func, delay) {
  let time;
  return function (...args) {
    if (time) {
      clearTimeout(time);
    }
    time = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

export default DebounceSearch;
