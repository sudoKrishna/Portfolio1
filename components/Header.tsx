'use client';

import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.logo}>
                JULES STUDIO
            </div>
            <nav className={styles.nav}>
                <a href="#work" className={styles.navLink}>Selected Work</a>
                <a href="#about" className={styles.navLink}>About</a>
                <a href="#services" className={styles.navLink}>Services</a>
                <button className={styles.ctaButton}>
                    Book a Free Call
                </button>
            </nav>
        </header>
    );
}
