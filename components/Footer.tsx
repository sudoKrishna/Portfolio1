'use client';

import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <h2 className={styles.headline}>
                    Let’s create something<br />timeless together.
                </h2>
                <div className={styles.links}>
                    <div className={styles.column}>
                        <span className={styles.linkTitle}>Socials</span>
                        <a href="#" className={styles.linkItem}>Instagram</a>
                        <a href="#" className={styles.linkItem}>LinkedIn</a>
                        <a href="#" className={styles.linkItem}>Twitter</a>
                    </div>
                    <div className={styles.column}>
                        <span className={styles.linkTitle}>Contact</span>
                        <a href="mailto:hello@jules.studio" className={styles.linkItem}>hello@jules.studio</a>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <span>© 2026 Jules Studio. All Rights Reserved.</span>
                <span>Local Time: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
        </footer>
    );
}
