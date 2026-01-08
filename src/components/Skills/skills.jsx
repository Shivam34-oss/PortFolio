import styles from './skills.module.css';
import { Layout, Server, Database, Wrench } from 'lucide-react'; // Icons

const SKILLS = {
  Frontend: ['HTML5', 'CSS3 / SCSS', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
  Database: ['MongoDB', 'Mongoose'],
  Tools: ['Git', 'Postman', 'Vite', 'Vercel']
};

// Category ke hisaab se icons
const iconMap = {
  Frontend: <Layout className={styles.categoryIcon} />,
  Backend: <Server className={styles.categoryIcon} />,
  Database: <Database className={styles.categoryIcon} />,
  Tools: <Wrench className={styles.categoryIcon} />
};

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>Technical Skills</h2>
        <div className={styles.underline}></div>
      </div>

      <div className={styles.grid}>
        {Object.entries(SKILLS).map(([category, items]) => (
          <div key={category} className={styles.card}>
            <div className={styles.cardHeader}>
              {iconMap[category]}
              <h3 className={styles.category}>{category}</h3>
            </div>
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
  );
}