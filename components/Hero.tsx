'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

// Using the generated artifact path
import heroBg from '../public/assets/hero_background.jpg'; // Assuming I move it there, or I'll just use the artifact URL logic if I can. 
// Actually I need to make sure the image exists. 
// For now I will assume the user or I will place the image. 
// Wait, I can't import what doesn't exist. I should handle the image prop.

interface HeroProps {
    imageSrc?: string;
}

export default function Hero({ imageSrc }: HeroProps) {
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (bgRef.current) {
                const scrolled = window.scrollY;
                bgRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={styles.hero}>
            <div className={styles.backgroundContainer} ref={bgRef}>
                {/* Placeholder or actual image */}
                {imageSrc ? (
                    <img src={imageSrc} alt="Hero Background" className={styles.backgroundImage} />
                ) : (
                    <div className={styles.backgroundImage} style={{ backgroundColor: '#ccc' }} />
                )}
            </div>
            <div className={styles.content}>
                <h1 className={styles.headline}>
                    Designing for<br />Results
                </h1>
                <p className={styles.subheadline}>
                    Crafting digital experiences that merge aesthetics with function.
                </p>
            </div>
        </section>
    );
}
