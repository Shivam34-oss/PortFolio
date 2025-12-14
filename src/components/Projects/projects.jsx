import React from "react";
import { Link } from "react-router-dom";
import styles from "./projects.module.css";

const projectsData = [
  {
    id: "auth",
    title: "Auth UI (Login / Signup)",
    description:
      "Complete authentication system with signup & login using JWT, MongoDB, Express and React. Includes form validation, token handling and protected flow.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    image: "/assets/projects/auth-ui.png",
    type: "internal"
  },
  {
    id: "wanderlust",
    title: "Wanderlust – Travel Listing Platform",
    description:
      "Full-stack Airbnb-style travel listing platform. Users can explore destinations and listings. Built with Node.js, Express & MongoDB. Deployed live on Render.",
    tech: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap"],
    image: "/assets/projects/wanderlust.png",
    demo: "https://wonderlust-listing-fgbx.onrender.com/",
    repo: "https://github.com/YOUR_GITHUB/wanderlust",
    type: "external"
  }
];

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <h2 className={styles.heading}>Projects</h2>
        <p className={styles.sub}>
          Real-world projects showcasing full-stack development skills
        </p>

        <div className={styles.grid}>
          {projectsData.map((p) => (
            <article key={p.id} className={styles.card}>
              <div className={styles.imgWrap}>
                <img
                  src={p.image}
                  alt={p.title}
                  onError={(e) => (e.target.src = "/assets/projects/wanderlust.png")}
                />
              </div>

              <div className={styles.cardBody}>
                <h3>{p.title}</h3>
                <p>{p.description}</p>

                <div className={styles.tech}>
                  {p.tech.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>

                <div className={styles.links}>
                  {p.type === "internal" && (
                    <Link to={`/projects/${p.id}`} className={styles.btn}>
                      Open Demo
                    </Link>
                  )}

                  {p.type === "external" && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.btn}
                    >
                      Open Live
                    </a>
                  )}

                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.outlineBtn}
                    >
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
