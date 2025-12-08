import React from 'react'
import styles from './contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.wrap}>
      <h2 className={styles.title}>Contact</h2>

      <form className={styles.form} onSubmit={(e) => { e.preventDefault(); alert('Message sent (demo)') }}>
        <label className={styles.field}>
          <span>Name</span>
          <input name="name" required />
        </label>
        <label className={styles.field}>
          <span>Email</span>
          <input name="email" type="email" required />
        </label>
        <label className={styles.field}>
          <span>Message</span>
          <textarea name="message" rows="5" required />
        </label>

        <div className={styles.actions}>
          <button className={styles.btn} type="submit">Send</button>
        </div>
      </form>
    </section>
  )
}
