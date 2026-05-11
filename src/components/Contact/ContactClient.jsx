import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import styles from "./contact.module.css";
import { Mail, Send, Phone } from "lucide-react";

export default function ContactClient() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(() => {
          setSent(true);
          setTimeout(() => setSent(false), 5000);
          e.target.reset();
      }, (error) => console.log(error.text));
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Ready to Scale Your Business?</h2>
          <div className={styles.bar}></div>
          <p>I build software that saves time and generates revenue. Let's discuss your project.</p>
        </div>

        <div className={styles.layout}>
          <div className={styles.infoSide}>
            <div className={styles.infoCard}>
              <Mail className={styles.icon} />
              <div><strong>Email</strong><p>sc7601862@gmail.com</p></div>
            </div>
            <div className={styles.infoCard}>
              <Phone className={styles.icon} />
              <div><strong>WhatsApp</strong><p>+91-8924916975</p></div>
            </div>
            <div className={styles.statusCard}>
              <div className={styles.dot}></div>
              <p>Available for freelance & consulting</p>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className={styles.form}>
            <div className={styles.inputGroup}>
              <input type="text" name="user_name" placeholder="Your Name" required />
            </div>
            <div className={styles.inputGroup}>
              <input type="email" name="user_email" placeholder="Your Email" required />
            </div>
            <div className={styles.inputGroup}>
              <textarea name="message" rows="5" placeholder="How can I help you?" required></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>
              {sent ? "Message Sent!" : "Send Message"} <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}