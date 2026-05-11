import React from 'react';
import styles from './hero.module.css';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

export default function HeroClient() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Transforming Concepts into <span className={styles.name}>Digital Reality</span>
        </h1>
        
        <p className={styles.subtitle}>AI-Powered Web Developer</p>
        
        <p className={styles.description}>
          I bridge the gap between complex engineering and intuitive user experience. 
          Building scalable, high-performance web applications for forward-thinking businesses.
        </p>

        <div className={styles.ctas}>
          <a className={styles.btnPrimary} href="#projects">
            View My Work <ArrowRight size={18} />
          </a>
          <a className={styles.btnSecondary} href="#contact">
            Let's Collaborate
          </a>
        </div>

        <div className={styles.socials}>
          <a href="https://github.com/Shivam-oss" aria-label="Github"><Github size={24} /></a>
          <a href="https://www.linkedin.com/in/shivam-chauhan-86067a209/" aria-label="Linkedin"><Linkedin size={24} /></a>
          <a href="mailto:sc7601862@gmail.com" aria-label="Email"><Mail size={24} /></a>
        </div>
      </div>     
    </section>
  );
}