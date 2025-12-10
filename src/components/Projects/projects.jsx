import React from "react";
import { Link } from "react-router-dom";

import styles from "./projects.module.css";

const projectsData = [
  {
    id: 1,
    title: "Healthcare Dashboard (React)",
    description:
      "Responsive healthcare dashboard with sidebar, calendar, appointments and activity panels. Built with React and CSS modules.",
    tech: ["React", "CSS Modules", "Responsive"],
    image: "/assets/projects/health-dashboard.png",
    demo: "https://your-demo-link-1.com",
    repo: "https://github.com/yourusername/health-dashboard"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "Personal portfolio with multi-section layout (Hero, About, Projects, Contact). Deploy-ready and SEO-friendly.",
    tech: ["HTML", "React", "Netlify"],
    image: "/assets/projects/portfolio.png",
    demo: "https://portfolio-t7ka.onrender.com/",
    repo: "https://github.com/yourusername/portfolio"
  },
  {
    id: 3,
    title: "Auth UI (Login / Signup)",
    description:
      "Clean login & signup UI with form validation and reusable components. Ready to integrate with backend auth.",
    tech: ["HTML", "CSS", "JS", "React"],
    image: "/assets/projects/auth-ui.png",
    demo: "https://your-demo-link-3.com",
    repo: "https://github.com/yourusername/auth-ui"
  }
];

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <h2 className={styles.heading}>Projects</h2>
        <p className={styles.sub}>Selected projects I built — try the demos or check the code</p>

        <div className={styles.grid}>
          {projectsData.map((p) => (
            <article key={p.id} className={styles.card}>
              <div className={styles.imgWrap}>
                <img
                  src={p.image}
                  alt={p.title}
                  className={styles.projectImg}
                  onError={(e) => {
                    e.target.src = "/assets/projects/placeholder.png";
                  }}
                />
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.desc}>{p.description}</p>

                <div className={styles.tech}>
                  {p.tech.map((t, i) => (
                    <span key={i} className={styles.tag}>{t}</span>
                  ))}
                </div>
<div className={styles.links}>
  {/* internal route to project detail */}
  <Link to={`/projects/${p.id}`} className={styles.btn}>
    Open Demo
  </Link>

  {p.repo && (
    <a href={p.repo} target="_blank" rel="noreferrer" className={styles.outlineBtn}>
      Code
    </a>
  )}
</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
