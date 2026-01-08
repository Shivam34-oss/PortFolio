import styles from './about.module.css'
import {  Code2, Database, Layout, Settings, Terminal , Server } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>About Me</h2>
                    <div className={styles.underline}></div>
                </div>

                <div className={styles.content}>
                    <p className={styles.bio}>
                        I am a results-driven <strong>Full-Stack Web Developer</strong> specializing in building 
                        scalable, secure, and user-centric web applications. I enjoy crafting clean, 
                        accessible interfaces and designing robust backend systems.
                    </p>

                    {/* Skill Cards Grid */}
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <Code2 className={styles.icon} />
                            <h3>Frontend</h3>
                            <p>React, Hooks, Context API, Modular UI</p>
                        </div>
                        <div className={styles.card}>
                            <Server className={styles.icon} />
                            <h3>Backend</h3>
                            <p>Node.js, Express, RESTful APIs, JWT Auth</p>
                        </div>
                        <div className={styles.card}>
                            <Database className={styles.icon} />
                            <h3>Database</h3>
                            <p>MongoDB, Mongoose, Schema Design</p>
                        </div>
                        <div className={styles.card}>
                            <Terminal className={styles.icon} />
                            <h3>Tools</h3>
                            <p>Git, Postman, Vite, Deployment</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
