import styles from './about.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.name}>About Me</h2>
        </div>

        <div className={styles.right}>
          <p className={styles.bio}>
            I build elegant, high-performance web applications with a focus on clean UI, accessibility and
            maintainable code. I love turning product ideas into polished experiences using the MERN stack
            (React, Node.js, Express, MongoDB). My priorities are performance, responsiveness and ship-ready
            features that solve real user problems.
          </p>

          <ul className={styles.highlights}>
            <li><strong>Frontend:</strong> React, React Hooks, Context, Tailwind / CSS Modules</li>
            <li><strong>Backend:</strong> Node.js, Express, REST APIs, JWT Authentication</li>
            <li><strong>Data & Tools:</strong> MongoDB, Mongoose, Git, Vite, Postman</li>
            <li><strong>What I deliver:</strong> Responsive UI, tested components, fast builds & deployable apps</li>
          </ul>

          <div className={styles.skillsWrap}>
            <span className={styles.skill}>React</span>
            <span className={styles.skill}>JavaScript (ES6+)</span>
            <span className={styles.skill}>Node.js</span>
            <span className={styles.skill}>Express</span>
            <span className={styles.skill}>MongoDB</span>
            <span className={styles.skill}>HTML & CSS</span>
            <span className={styles.skill}>Responsive Design</span>
            <span className={styles.skill}>Git</span>
          </div>
        </div>
      </div>
    </section>
  )
}

