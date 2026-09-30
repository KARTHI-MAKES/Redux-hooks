import React from "react";
import styles from './useCallback.module.css'

const ChildUseCallback = React.memo(({ onSearch, searchedValue }) => {
    return (
                <div className={styles.toolbar}>
                     <div className={styles.searchGroup}>
                         <label className={styles.label} htmlFor="callback-search">Search value</label>
                         <input className={styles.input} id="callback-search" type="search" onChange={onSearch} value={searchedValue} placeholder="Type something..." />
                         <div className={styles.result}>
                             <span className={styles.resultLabel}>Live result</span>
                             <p className={styles.resultText}>{searchedValue || 'Your text will appear here'}</p>
                         </div>
                     </div>
        </div>
    );
});

export default ChildUseCallback;
