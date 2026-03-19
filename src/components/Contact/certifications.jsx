import React, { useState, useMemo } from "react";
import styles from "./certifications.module.css";
import { Award, ExternalLink } from "lucide-react";
import certificateImg from "../../assets/badges/certificate.png";

const certifications = [
  {
    id: 1,
    title: "Google Cloud Arcade Facilitator",
    issuer: "Google Cloud",
    date: "2023",
    description: "Completed the Arcade program, earning badges for hands-on cloud skills and infrastructure.",
    image: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
    link: "https://www.cloudskillsboost.google/public_profiles/YOUR_PROFILE_ID" // TODO: Replace YOUR_PROFILE_ID
  },
  {
    id: 2,
    title: "Generative AI Fundamentals",
    issuer: "Google Cloud",
    date: "2023",
    description: "Mastered the basics of Generative AI, LLMs, and responsible AI principles.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg",
    link: "https://www.cloudskillsboost.google/public_profiles/YOUR_PROFILE_ID" // TODO: Replace YOUR_PROFILE_ID
  },
  {
    id: 3,
    title: "Full Stack Web Development",
    issuer: "Apna College",
    date: "2025",
    description: "Comprehensive training in MERN stack development, covering React, Node.js, Express, and MongoDB.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    link: "https://www.apnacollege.in/verify/YOUR_CERTIFICATE_ID" // TODO: Update with actual verification link
  },
  {
    id: 4,
    title: "DevOps Engineer Career Path",
    issuer: "Microsoft",
    date: "2023",
    description: "The DevOps engineers assists in designing and implementing strategies for collaboration, code, infrastructure, source control, security, compliance, continuous integration, testing, delivery, monitoring, and feedback.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    link: "https://learn.microsoft.com/en-us/users/YOUR_PROFILE/credentials/YOUR_CREDENTIAL_ID" // TODO: Update with actual verification link
  },
  // Aap aur bhi certifications yahan add kar sakte hain
];

const filters = ["All", ...new Set(certifications.map((cert) => cert.issuer))];

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCerts = useMemo(() => {
    if (activeFilter === "All") return certifications;
    return certifications.filter((cert) => cert.issuer === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <section className={styles.certifications} id="certifications">
        <div className={styles.container}>
          <div className={styles.header}>
            <h2>Certifications & Badges</h2>
            <div className={styles.bar}></div>
            <p>Recognition of my technical skills and achievements in Cloud & AI.</p>
          </div>

          <div className={styles.filterContainer}>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`${styles.filterButton} ${
                  activeFilter === filter ? styles.active : ""
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {filteredCerts.map((cert, index) => (
              <div key={cert.id} className={styles.card} style={{ '--card-index': index }}>
                <div className={styles.badgeWrapper}>
                  <img src={cert.image} alt={cert.title} className={styles.badgeImage} />
                </div>
                <div className={styles.content}>
                  <h3>{cert.title}</h3>
                  <span className={styles.issuer}>{cert.issuer}</span>
                  <p className={styles.description}>{cert.description}</p>
                  <div className={styles.footer}>
                    <span className={styles.date}>{cert.date}</span>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className={styles.verifyLink}>
                      Verify <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.fullCertificateViewer}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2>Full Certificate Preview</h2>
            <div className={styles.bar}></div>
            <p>A closer look at one of my key certifications.</p>
          </div>
          <div className={styles.certificateImageContainer}>
            <img 
              src={certificateImg} 
              alt="Full Stack Web Development Certificate" 
              className={styles.certificateImage}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>
    </>
  );
}