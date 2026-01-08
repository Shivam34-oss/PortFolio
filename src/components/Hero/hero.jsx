
import styles from './hero.module.css'
import { Github , Linkedin , Mail , ExternalLink } from 'lucide-react';
export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
    <div className={styles.container}>
      <h1 className={styles.title}>Hi, I'm <span className={styles.name}>Shivam Chauhan</span></h1>
      <p className={styles.subtitle}>Full-Stack Web Developer (MERN)</p>
      <p className={styles.description}>B.A Graduate by degree , Developer by passion .I Build secure, scalable web applications using modern technologies.</p>
      <div className={styles.ctas}>
        <a className={styles.btnPrimary} href="#projects">View Projects <ExternalLink size={18} className={styles.icon} /></a>
        <a className={styles.btnSecondary} href="/Shivam_Chauhan_Resume.pdf" download = "Shivam-Chauhan-CV.pdf">Download CV</a>
      </div>
      <div className={styles.socials}>
        <a href="https://github.com/Shivam-oss"><Github size={24} className={styles.icon} /></a>
        <a href="https://www.linkedin.com/in/shivam-chauhan-86067a209/"><Linkedin size={24} className={styles.icon} /></a>
        <a href="mailto:sc7601862@gmail.com"><Mail size={24} className={styles.icon} /></a>
      </div>
       <div className={styles.skills}>{['React','Node.js','Express','MongoDB' ].map(skill => ( <span key = {skill} className={styles.skillBadge}>{skill}</span>))}</div>
    </div>     
    </section>
  );
}
