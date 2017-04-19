import React from 'react';
import styles from './Placeholder.css';

const Placeholder = (props) => (
    <div>
        <div className={styles.smallPlaceholder}>
            <div className={styles.heading}></div>
            <div className={styles.smallFooter}></div>
        </div>
        <div className={styles.largePlaceholder}>
            <div className={styles.heading}></div>
            <div className={styles.footer}></div>
        </div>
    </div>
);

export default Placeholder;