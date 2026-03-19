import React from 'react';
import styles from './skills.module.css';

// Skill data grouped by rows for scrolling
const SKILL_ROWS = [
  [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React.js", icon: "⚛️" },
    { name: "Redux", icon: "🔄" },
    { name: "Tailwind", icon: "🌊" },
    { name: "Bootstrap", icon: "🅱️" },
    { name: "SASS", icon: "💅" },
  ],
  [
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚂" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Mongoose", icon: "🦁" },
    { name: "REST API", icon: "🔌" },
    { name: "JWT Auth", icon: "🔐" },
    { name: "Firebase", icon: "🔥" },
    { name: "SQL", icon: "🗃️" },
  ],
  [
    { name: "Git", icon: "📦" },
    { name: "GitHub", icon: "🐙" },
    { name: "Postman", icon: "🚀" },
    { name: "Vite", icon: "⚡" },
    { name: "VS Code", icon: "💻" },
    { name: "Figma", icon: "🖌️" },
    { name: "Vercel", icon: "▲" },
    { name: "NPM", icon: "📦" },
  ]
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>Technical Skills</h2>
        <div className={styles.bar}></div>
        <p className={styles.subtitle}>Technologies I work with</p>
      </div>

      <div className={styles.scrollWrapper}>
        {SKILL_ROWS.map((row, index) => (
          <div 
            key={index} 
            className={styles.marquee} 
            style={{ 
              '--direction': index % 2 === 0 ? 'normal' : 'reverse',
              '--duration': `${20 + index * 5}s` 
            }}
          >
            <div className={styles.track}>
              {/* Original Set */}
              {row.map((skill, i) => (
                <div key={`orig-${i}`} className={styles.flashCard}>
                  <span className={styles.icon}>{skill.icon}</span>
                  <span className={styles.name}>{skill.name}</span>
                </div>
              ))}
              {/* Duplicate Set for Seamless Loop */}
              {row.map((skill, i) => (
                <div key={`dup-${i}`} className={styles.flashCard}>
                  <span className={styles.icon}>{skill.icon}</span>
                  <span className={styles.name}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}