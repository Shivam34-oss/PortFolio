
import styles from './hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <h1 className={styles.title}>Hi, I'm <span>Shivam Chauhan</span></h1>
      <p className={styles.subtitle}>Full-Stack Web Developer & Designer</p>

      <div className={styles.ctas}>
        <a className={styles.btn} href="#projects">View Projects</a>
        <a className={styles.btn} href="/assets/Shivam-Chauhan-CV.pdf" download>Download CV</a>
        <a className={styles.btn} href="#contact">Hire Me</a>
      </div>

      <div className={styles.skills}>React · Node.js · Express · MongoDB</div>
    </section>
  )
}
