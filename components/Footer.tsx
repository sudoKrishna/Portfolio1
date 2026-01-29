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

                        <a
                            href="mailto:krishnachaudhary2007gt@gmail.com"
                            className={styles.linkItem}
                        >
                            Email
                        </a>

                        <a
                            href="https://www.linkedin.com/in/krishna-chaudhary-1b287526b/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.linkItem}
                        >
                            LinkedIn
                        </a>

                        <a
                            href="https://x.com/cha73066"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.linkItem}
                        >
                            X (Twitter)
                        </a>
                    </div>

                    <div className={styles.column}>
                        <span className={styles.linkTitle}>Contact</span>
                        <a
                            href="mailto:krishnachaudhary2007gt@gmail.com"
                            className={styles.linkItem}
                        >
                            krishnachaudhary2007gt@gmail.com
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <span>© 2026 Krishna Chaudhary. All Rights Reserved.</span>
                <span>
                    Local Time:{' '}
                    {new Date().toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                    })}
                </span>
            </div>
        </footer>
    );
}
