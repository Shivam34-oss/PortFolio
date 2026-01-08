import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";

const NavItem = ({ href, children, onClick }) => (
  <li className={styles.navItem}>
    <a href={href} onClick={onClick} className={styles.navLink}>
      {children}
    </a>
  </li>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navRef = useRef(null);
  const toggleRef = useRef(null);
  const navigate = useNavigate();

  const toggle = () => setOpen((prev) => !prev);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  // Close on outside click
  useEffect(() => {
    function onDocClick(e) {
      if (!open) return;
      if (
        navRef.current && !navRef.current.contains(e.target) &&
        toggleRef.current && !toggleRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [open]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setOpen(false);
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar} aria-label="Primary navigation">
        <div className={styles.brand}>
          <a href="#hero" className={styles.logo} onClick={() => {navigate("/"); setOpen(false);}}>
             Shivam<span className={styles.dot}>.</span>
          </a>
        </div>

        {/* Hamburger Menu Button */}
        <button 
          className={`${styles.mobileBtn} ${open ? styles.active : ""}`} 
          onClick={toggle} 
          ref={toggleRef}
          aria-label="Toggle navigation"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        <ul className={`${styles.navList} ${open ? styles.active : ""}`} ref={navRef}>
          <NavItem href="#hero" onClick={() => setOpen(false)}>Home</NavItem>
          <NavItem href="#about" onClick={() => setOpen(false)}>About</NavItem>
          <NavItem href="#skills" onClick={() => setOpen(false)}>Skills</NavItem>
          <NavItem href="#projects" onClick={() => setOpen(false)}>Projects</NavItem>
          <NavItem href="#contact" onClick={() => setOpen(false)}>Contact</NavItem>

          <li className={styles.navItem}>
            {isLoggedIn ? (
              <button className={styles.authBtn} onClick={handleLogout}>Logout</button>
            ) : (
              <button className={styles.authBtn} onClick={() => { setOpen(false); navigate("/auth-demo"); }}>
                Login
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}