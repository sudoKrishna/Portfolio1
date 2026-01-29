'use client';

import React from 'react';
import styles from './WorkGrid.module.css';

const projects = [
    { id: 1, title: 'Donate', category: 'Donation', image: '/assets/img5.png' },
    { id: 2, title: 'Vogue Editorial', category: 'Art Direction', image: '/assets/img1.png' },
    { id: 3, title: 'Garage', category: 'Branding', image: '/assets/img2.png' },
    { id: 4, title: 'Ease', category: 'Packaging', image: '/assets/img3.png' },
    { id: 5, title: 'Motia', category: 'Technology', image: '/assets/img4.png' },
];

export default function WorkGrid() {
    return (
        <section id="work" className={styles.section}>
            <h2 className={styles.sectionTitle}>Selected Work</h2>
            <div className={styles.grid}>
                {projects.map((project) => (
                    <div key={project.id} className={styles.gridItem}>
                        {/* Using standard img tag for simplicity with local assets if Next Image config is strict, but Next Image is better. 
                 For now, assume broad config or just standard img for speed in dev. */}
                        <img src={project.image} alt={project.title} className={styles.image} />
                        <div className={styles.overlay}>
                            <span className={styles.projectCategory}>{project.category}</span>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
