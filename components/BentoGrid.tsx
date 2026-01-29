'use client';

import React from 'react';
import styles from './BentoGrid.module.css';

const services = [
    { title: 'Brand Identity', desc: 'Crafting unique visual identities that resonate with your audience.', icon: '✧' },
    { title: 'Web Design', desc: 'Designing immersive digital experiences focused on conversion and aesthetics.', icon: '✦', large: true },
    { title: 'Art Direction', desc: 'Guiding visual narratives for campaigns and editorial shoots.', icon: '✺' },
    { title: 'Strategy', desc: 'Defining the roadmap for your brand\'s digital presence.', icon: '✶' },
];

export default function BentoGrid() {
    return (
        <section id="services" className={styles.section}>
            <h2 className={styles.heading}>Services</h2>
            <div className={styles.grid}>
                <div className={`${styles.card} ${styles.largeCard}`}>
                    <div className={styles.icon}>About</div>
                    <div>
                        <h3 className={styles.cardTitle}>Who I Am</h3>
                        <p className={styles.cardDesc}>
                            A multidisciplinary designer focused on creating minimal, functional, and timeless digital experiences.
                            I believe in the power of negative space and typography to tell compelling stories.
                        </p>
                    </div>
                </div>
                {services.map((s, i) => (
                    <div key={i} className={`${styles.card} ${s.large ? styles.largeCard : ''}`}>
                        <div className={styles.icon}>{s.icon}</div>
                        <div>
                            <h3 className={styles.cardTitle}>{s.title}</h3>
                            <p className={styles.cardDesc}>{s.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
