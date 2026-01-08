import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import styles from "./contact.module.css";
import { Mail, MessageSquare, Send, Phone } from "lucide-react";

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Note: EmailJS dashboard se aapko ye IDs milengi
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(() => {
          setSent(true);
          setTimeout(() => setSent(false), 5000);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Get In Touch</h2>
          <div className={styles.bar}></div>
          <p>Have a project in mind or just want to say hi? My inbox is always open.</p>
        </div>

        <div className={styles.layout}>
          {/* Left: Contact Info */}
          <div className={styles.infoSide}>
            <div className={styles.infoCard}>
              <Mail className={styles.icon} />
              <div>
                <strong>Email</strong>
                <p>sc7601862@gmail.com</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <Phone className={styles.icon} />
              <div>
                <strong>WhatsApp</strong>
                <p>+91-8924916975</p>
              </div>
            </div>

            <div className={styles.statusCard}>
              <div className={styles.dot}></div>
              <p>Available for new opportunities</p>
            </div>
          </div>

          {/* Right: Contact Form */}
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
