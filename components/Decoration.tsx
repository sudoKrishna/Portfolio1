import React from 'react';
import styles from './Decoration.module.css';

export default function Decoration() {
    return (
        <div className={styles.container}>
            <div className={styles.verticalText}>AESTHETIC</div>
            <div className={styles.kanji}>創造</div>
        </div>
    );
}
