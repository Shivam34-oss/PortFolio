
import styles from './projects.module.css'

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.grid}>
        <article className={styles.card}>
          <h3>Text Converter</h3>
          <p>A simple tool that converts text to uppercase/lowercase/reverse.</p>
          <a className={styles.link} href="./projects/textConvert.html" target="_blank" rel="noreferrer">View Project</a>
        </article>

        <article className={styles.card}>
          <h3>Landing Page</h3>
          <p>Responsive marketing page optimized for conversions and speed.</p>
        </article>
      </div>
    </section>
  )
}
