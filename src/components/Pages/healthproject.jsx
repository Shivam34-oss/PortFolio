import React from "react";
import styles from "./healthproject.module.css";

export default function HealthProject() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1>Healthcare Dashboard</h1>
        <p className={styles.lead}>
          Responsive healthcare dashboard with sidebar, calendar, appointments and activity panels. Built with React and CSS modules.
        </p>

        <div className={styles.grid}>
          <div className={styles.left}>
            <img
              src="/assets/projects/health-dashboard.png"
              alt="health dashboard"
              className={styles.mock}
              onError={(e) => (e.target.src = "/assets/projects/placeholder.png")}
            />
          </div>

          <div className={styles.right}>
            <h2>Overview</h2>
            <p>
              This project demonstrates a full dashboard UI with a collapsible sidebar, calendar view, appointment cards,
              activity feed and responsive layout for mobile and desktop. Ideal for admin and clinic management interfaces.
            </p>

            <h3>Features</h3>
            <ul>
              <li>Sidebar with navigation</li>
              <li>Calendar with add event button</li>
              <li>Appointment cards and details</li>
              <li>Responsive layout and accessible UI</li>
            </ul>

            <h3>Tech</h3>
            <div className={styles.tags}>
              <span>React</span><span>CSS Modules</span><span>Grid / Flexbox</span>
            </div>

            <div className={styles.actions}>
              <a href="https://portfolio-t7ka.onrender.com/" target="_blank" rel="noreferrer" className={styles.btn}>Open Portfolio Demo</a>
              <a href="https://github.com/Shivam34-oss/Healthcare-dashboard" target="_blank" rel="noreferrer" className={styles.outline}>View Code</a>
            </div>
          </div>
        </div>

        <section className={styles.screens}>
          <h3>Screenshots</h3>
          <div className={styles.row}>
            <img src="/assets/projects/health-1.png" alt="screen1" onError={(e)=> e.target.src="/assets/projects/placeholder.png"} />
            <img src="/assets/projects/health-2.png" alt="screen2" onError={(e)=> e.target.src="/assets/projects/placeholder.png"} />
            <img src="/assets/projects/health-3.png" alt="screen3" onError={(e)=> e.target.src="/assets/projects/placeholder.png"} />
          </div>
        </section>
      </div>
    </div>
  );
}
