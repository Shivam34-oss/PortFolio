import React from "react";
import { Link } from "react-router-dom";
import styles from "./projects.module.css";
import { ExternalLink, Github, Code2 } from 'lucide-react'; // Icons
import Story from "./Story";

// Helper function to check if a link is a valid production link
const isValidLink = (link) => {
  return link && link !== "#" && !link.includes("example.com") && !link.includes("yourusername");
};

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
  },
  {
    id: "ai-content-gen",
    title: "AI Content Automator",
    description: "SaaS platform for automated blog & social media content generation using OpenAI API. Streamlines marketing workflows.",
    tech: ["Next.js", "OpenAI API", "Stripe", "Tailwind"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    demo: "", // Empty strings will now automatically hide the button
    repo: "", 
    type: "external"
  },
  {
    id: "smart-bot",
    title: "Smart Support Bot",
    description: "Intelligent customer service automation agent. Uses NLP to classify tickets and provide instant automated responses.",
    tech: ["Python", "FastAPI", "React", "TensorFlow"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80",
    demo: "",
    repo: "",
    type: "external"
  },
  {
    id: "data-scraper",
    title: "Data Scraper Pipeline",
    description: "Automated ETL pipeline that scrapes e-commerce sites, cleans data, and visualizes market trends on a dashboard.",
    tech: ["Node.js", "Puppeteer", "MongoDB", "Chart.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    demo: "",
    repo: "",
    type: "external"
  },
  {
    id: "resume-ai",
    title: "HR Resume Screener",
    description: "Automated hiring tool that parses resumes and ranks candidates based on job descriptions using semantic matching.",
    tech: ["React", "Flask", "Spacy (NLP)", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
    demo: "",
    repo: "",
    type: "external"
  }
];

export default function Projects() {
  return (
    <>
    <Story />
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
                  ) : isValidLink(p.demo) ? (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                      <ExternalLink size={20} /> Live Demo
                    </a>
                  ) : null}

                  {isValidLink(p.repo) && (
                    <a href={p.repo} target="_blank" rel="noopener noreferrer" className={styles.btnOutline}>
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
    </>
  );
}
