import styles from './skills.module.css'

const SKILLS = {
  Frontend: ['HTML5', 'CSS3 / SCSS', 'JavaScript (ES6+)', 'React.js'],
  Backend: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
  Database: ['MongoDB', 'Mongoose'],
  Tools: ['Git', 'Postman', 'Vite']
}

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <h2 className={styles.title}>Skills</h2>

      <div className={styles.grid}>
        {Object.entries(SKILLS).map(([category, items]) => (
          <div key={category} className={styles.card}>
            <h3 className={styles.category}>{category}</h3>
            <ul className={styles.list}>
              {items.map(skill => (
                <li key={skill} className={styles.skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
