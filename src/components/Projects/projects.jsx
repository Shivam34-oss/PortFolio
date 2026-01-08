import React from "react";
import { Link } from "react-router-dom";
import styles from "./projects.module.css";
import { ExternalLink, Github, Code2 } from 'lucide-react'; // Icons

const projectsData = [
  {
    id: "auth",
    title: "Secure Auth System",
    description: "Production-ready auth featuring JWT Security, HttpOnly Cookies & Bcrypt. Designed as a scalable microservice.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    image: "/assets/projects/auth-ui.png",
    type: "internal"
  },
  {
    id: "wanderlust",
    title: "StaySphere – Rental Marketplace",
    description: "Full-stack Airbnb-style travel platform. Features location-based listings & cloud image storage.",
    tech: ["Node.js", "Express", "MongoDB", "EJS", "Cloudinary"],
    image: "/assets/projects/wanderlust.png",
    demo: "https://wonderlust-listing-fgbx.onrender.com/",
    repo: "https://github.com/Shivam34-oss/MajorProject",
    type: "external"
  }
  // Yahan aap apna naya project bas object add karke daal sakte hain
];

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <div className={styles.header}>
            <h2 className={styles.heading}>Featured Projects</h2>
            <div className={styles.bar}></div>
            <p className={styles.sub}>
              Robust applications built with modern full-stack architecture.
            </p>
        </div>

        <div className={styles.grid}>
          {projectsData.map((p) => (
            <article key={p.id} className={styles.card}>
              <div className={styles.imgWrap}>
                <div className={styles.overlay}></div>
                <img
                  src={p.image}
                  alt={p.title}
                  onError={(e) => (e.target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500")}
                />
              </div>

              <div className={styles.cardBody}>
                <h3>{p.title}</h3>
                <p className={styles.description}>{p.description}</p>

                <div className={styles.techStack}>
                  {p.tech.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>

                <div className={styles.links}>
                  {p.type === "internal" ? (
                    <Link to={`/projects/${p.id}`} className={styles.btnPrimary}>
                      <Code2 size={20} /> View Demo
                    </Link>
                  ) : (
                    <a href={p.demo} target="_blank" rel="noreferrer" className={styles.btnPrimary}>
                      <ExternalLink size={20} /> Live Demo
                    </a>
                  )}

                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer" className={styles.btnOutline}>
                      <Github size={20} /> Source
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
