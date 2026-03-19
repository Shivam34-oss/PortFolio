import React from "react";
import styles from "./Story.module.css";
import { Cpu, Zap, Target } from "lucide-react";

export default function Story() {
  return (
    <section className={styles.storySection} id="story">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>My Journey & Vision</h2>
          <div className={styles.bar}></div>
          <p className={styles.sub}>From Full Stack Code to Intelligent Automation.</p>
        </div>

        <div className={styles.content}>
          <div className={styles.textColumn}>
            <h3>The Architect of Possibility</h3>
            <p>
              My coding journey began with curiosity, but it evolved into a pursuit of <strong>intelligent automation</strong>. 
              Starting as a Full Stack Developer, I mastered the art of building robust, scalable web applications. 
              However, I realized that the future isn't just about writing code—it's about writing code that <em>thinks</em>.
            </p>
            <p>
              Instead of fearing the AI wave, I learned to surf it. I now integrate <strong>Artificial Intelligence</strong> into my workflow, 
              not just to automate tasks, but to unlock new possibilities that were previously out of reach.
            </p>
            <p className={styles.highlight}>
              I view every challenge as an open door. Whether it's a legacy system needing a complete overhaul or a complex AI integration, 
              I bring a toolkit that adapts to any situation. I don't just wait for opportunities; I have the skills and mindset to <strong>seize and execute them</strong>.
            </p>
          </div>

          <div className={styles.visualColumn}>
            <div className={styles.card}>
              <Zap className={styles.icon} color="#f472b6" />
              <h4>Rapid Adaptation</h4>
              <p>I learn and apply new tech stacks instantly to fit the project needs.</p>
            </div>
            <div className={styles.card}>
              <Cpu className={styles.icon} color="#a78bfa" />
              <h4>AI-First Mindset</h4>
              <p>Leveraging LLMs and automation to multiply productivity and value.</p>
            </div>
            <div className={styles.card}>
              <Target className={styles.icon} color="#34d399" />
              <h4>Problem Solver</h4>
              <p>I turn undefined problems into deployed, working solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}