import React from 'react';
import styles from './about.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.name}>About Me</h2>
          <p className={styles.bio}>
            I am a results-driven <strong>Full-Stack Web Developer</strong> specializing in building 
            scalable, secure, and user-centric web applications. I enjoy crafting clean, 
            accessible interfaces and designing robust backend systems.
            <br /><br />
            My core strength lies in translating product requirements into maintainable code 
            using modern JavaScript, RESTful APIs, and industry-standard authentication practices.
          </p>
        </div>

        <div className={styles.right}>
          <ul className={styles.highlights}>
            <li>
              <strong>Frontend Development</strong>
              <p>React, Hooks, Context API, Tailwind CSS, Modular UI Architecture</p>
            </li>
            <li>
              <strong>Backend Systems</strong>
              <p>Node.js, Express.js, RESTful APIs, JWT Authentication, Middleware</p>
            </li>
            <li>
              <strong>Database Management</strong>
              <p>MongoDB, Mongoose, Schema Design, Data Aggregation</p>
            </li>
            <li>
              <strong>DevOps & Tools</strong>
              <p>Git, GitHub, Postman, Vite, Vercel/Render Deployment</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
