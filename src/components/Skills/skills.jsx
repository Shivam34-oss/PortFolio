import React from 'react'
import styles from './skills.module.css'

const SKILLS = ['HTML5', 'CSS3 / SCSS', 'JavaScript', 'NodeJs', 'ReactJS', 'MongoDB', 'Express']

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <h2>Skills</h2>
      <ul className={styles.list}>
        {SKILLS.map(s => <li key={s}>{s}</li>)}
      </ul>
    </section>
  )
}
