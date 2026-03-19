import React, { useState, useEffect } from 'react';
import styles from './navbar.module.css';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#hero" className={styles.logo} onClick={closeMenu}>
          Shivam<span>.</span>
        </a>

        <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.open : ''}`}>
          <a href="#about" className={styles.navLink} onClick={closeMenu}>About</a>
          <a href="#skills" className={styles.navLink} onClick={closeMenu}>Skills</a>
          <a href="#projects" className={styles.navLink} onClick={closeMenu}>Projects</a>
          <a href="#certifications" className={styles.navLink} onClick={closeMenu}>Certifications</a>
          <a href="#contact" className={styles.contactBtn} onClick={closeMenu}>Contact Me</a>
        </nav>
      </div>
    </header>
  );
}