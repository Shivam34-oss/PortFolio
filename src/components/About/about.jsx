import styles from './about.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.name}>About Me</h2>
          <p className={styles.subtitle}>
            Full-Stack Web Developer (MERN)
          </p>
        </div>

        <div className={styles.right}>
          <p className={styles.bio}>
            I am a results-driven Full-Stack Web Developer specializing in building
            scalable, secure and user-centric web applications. I enjoy working
            across the entire stack — from crafting clean, accessible interfaces
            to designing robust backend systems that handle real-world data and
            authentication flows.
            <br /><br />
            My core strength lies in translating product requirements into
            maintainable code using modern JavaScript, RESTful APIs and
            industry-standard authentication practices.
          </p>

          <ul className={styles.highlights}>
            <li>
              <strong>Frontend:</strong> React, Hooks, Context API, Modular & Responsive UI
            </li>
            <li>
              <strong>Backend:</strong> Node.js, Express.js, REST APIs, JWT Authentication
            </li>
            <li>
              <strong>Database:</strong> MongoDB, Mongoose, Schema Design
            </li>
            <li>
              <strong>Development:</strong> API integration, secure auth flows, error handling
            </li>
            <li>
              <strong>Workflow:</strong> Git, Postman, Vite, deployment-ready builds
            </li>
          </ul>

          
        </div>
      </div>
    </section>
  )
}

