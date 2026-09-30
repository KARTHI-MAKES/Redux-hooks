import { useRef, useState } from 'react';
import styles from './useRef.module.css';

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

function UserRef() {
  const inputRef = useRef(null);
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

function handleSearch() {
  const query = inputRef.current.value.trim().toLowerCase();

  setResults(
    options.filter((option) =>
      option.name.toLowerCase().includes(query)
    )
  );
  setHasSearched(true);
}

  return (
    <main className={styles.page}>
      <section className={styles.card} aria-labelledby="search-title">
        <p className={styles.eyebrow}>useRef practice</p>
        <h1 className={styles.title} id="search-title">Find a name</h1>
        <p className={styles.description}>Enter a name, then press Search to see matching results.</p>

        <div className={styles.searchRow}>
          <input
            ref={inputRef}
            className={styles.input}
            type="text"
            placeholder="Search names..."
            aria-label="Search names"
            onKeyDown={(event) => {
              if (event.key === 'Enter') handleSearch();
            }}
          />
          <button className={styles.button} type="button" onClick={handleSearch}>
            Search
          </button>
        </div>

        <ul className={styles.results} aria-live="polite">
          {results.length > 0 ? (
            results.map((option) => (
              <li className={styles.result} key={option.id}>{option.name}</li>
            ))
          ) : (
            <li className={styles.empty}>   {hasSearched
        ? 'No matching names found.'
        : 'Search results will appear here.'}</li>
          )}
        </ul>
      </section>
    </main>
  );
}

export default UserRef;
