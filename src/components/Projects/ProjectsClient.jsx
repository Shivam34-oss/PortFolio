import React, { useState, useEffect } from "react";
import styles from "./projects.module.css";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const projectsData = [
  {
    id: "ai-saas",
    title: "AI-Powered SaaS Dashboard",
    description:
      "Credit-based SaaS platform with OpenAI-powered content generation. Stripe payments + tiered subscriptions for a complete production flow.",
    tech: ["React", "Node.js", "Stripe API", "OpenAI", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    demo: "",
    repo: "",
    type: "external",
  },
  {
    id: "teamsync",
    title: "TeamSync - Real-Time Collaboration",
    description:
      "Real-time Kanban-style collaboration using WebSockets. Instant updates, synchronized state, and JWT-secured access across clients.",
    tech: ["React", "Socket.io", "Express", "JWT Auth", "Redux"],
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    demo: "",
    repo: "",
    type: "external",
  },
  {
    id: "medicare",
    title: "MediCare Appointment System",
    description:
      "Healthcare appointment booking system with smart scheduling rules. Prevents double-booking and supports automated confirmations via email reminders.",
    tech: ["React", "MongoDB Aggregations", "Nodemailer", "Cron"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    demo: "",
    repo: "",
    type: "external",
  },
];


export default function ProjectsClient() {
  const [current, setCurrent] = useState(0);
  const length = projectsData.length;

  const nextSlide = React.useCallback(() => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  }, [length]);

  const prevSlide = React.useCallback(() => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  }, [length]);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className={styles.projects} id="projects" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <div className={styles.container}>
        <div className={styles.header} style={{ marginBottom: '4rem' }}>
            <h2 className={styles.heading}>Selected Work</h2>
            <div className={styles.bar}></div>
            <p className={styles.sub}>High-impact solutions solving real business problems.</p>
        </div>

        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', perspective: '1000px' }}>
            {/* Left Arrow */}
            <button 
              onClick={prevSlide} 
              aria-label="Previous project"
              style={{
                position: 'absolute', left: '0', zIndex: 20,
                background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
                color: 'white', padding: '12px', borderRadius: '50%', cursor: 'pointer',
                backdropFilter: 'blur(5px)', transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
               onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >
                <ChevronLeft size={24} />
            </button>

            {/* Carousel Items */}
            <div style={{ width: '100%', maxWidth: '900px', height: '500px', position: 'relative' }}>
              {projectsData.map((p, index) => {
                const isActive = index === current;
                return (
                  <div
                    key={p.id}
                    style={{
                      position: 'absolute',
                      top: 0, left: 0, width: '100%', height: '100%',
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'scale(1) translateX(0)' : 'scale(0.9) translateX(50px)',
                      transition: 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                      pointerEvents: isActive ? 'all' : 'none',
                      zIndex: isActive ? 10 : 0
                    }}
                  >
                    <article className={styles.card} style={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
                      <div className={styles.imgWrap} style={{ flex: '1.5', minHeight: '0' }}>
                        <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => (e.target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500")} />
                      </div>
                      <div className={styles.cardBody} style={{ flex: '1', padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{p.title}</h3>
                        <p className={styles.description} style={{ fontSize: '1.1rem', color: '#ccc', marginBottom: '1.5rem' }}>{p.description}</p>
                        <div className={styles.techStack} style={{ marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {p.tech.map((t) => (<span key={t} className={styles.tag} style={{ background: 'rgba(79, 172, 254, 0.1)', color: '#4facfe', border: '1px solid rgba(79, 172, 254, 0.3)' }}>{t}</span>))}
                        </div>
                        <div style={{ marginTop: 'auto', display: 'flex', gap: '15px' }}>
                          {p.demo && (
                            <a href={p.demo} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#4facfe', textDecoration: 'none' }}>
                              <ExternalLink size={18} /> Demo
                            </a>
                          )}
                          {p.repo && (
                            <a href={p.repo} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'white', textDecoration: 'none' }}>
                              <Github size={18} /> Code
                            </a>
                          )}
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>

            {/* Right Arrow */}
            <button 
              onClick={nextSlide} 
              aria-label="Next project"
              style={{
                position: 'absolute', right: '0', zIndex: 20,
                background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
                color: 'white', padding: '12px', borderRadius: '50%', cursor: 'pointer',
                backdropFilter: 'blur(5px)', transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
               onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
                <ChevronRight size={24} />
            </button>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', gap: '12px' }}>
            {projectsData.map((_, idx) => (
                <div key={idx} onClick={() => setCurrent(idx)} style={{ width: current === idx ? '30px' : '10px', height: '10px', borderRadius: '5px', background: current === idx ? '#4facfe' : 'rgba(255,255,255,0.2)', cursor: 'pointer', transition: 'all 0.3s' }} />
            ))}
        </div>
      </div>
    </section>
  );
}