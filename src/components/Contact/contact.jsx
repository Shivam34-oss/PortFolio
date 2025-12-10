import React from "react";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.inner}>
        <h2>Contact</h2>
        <p>Have a project or need help? Reach out — I reply fast.</p>

        <div className={styles.info}>
          <div>
            <strong>Email</strong>
            <p>shivam@example.com</p>
          </div>

          <div>
            <strong>WhatsApp</strong>
            <p>+91-XXXXXXXXXX</p>
          </div>

          <div>
            <strong>LinkedIn</strong>
            <p>
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
                linkedin.com/in/yourprofile
              </a>
            </p>
          </div>
        </div>

        <a className={styles.cta} href="mailto:shivam@example.com">Email Me</a>
      </div>
    </section>
  );
}
