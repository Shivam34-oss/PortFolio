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

  //  CHECK LOGIN STATUS
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  // close on outside click
  useEffect(() => {
    function onDocClick(e) {
      if (!open) return;
      if (
        navRef.current &&
        !navRef.current.contains(e.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [open]);

  // close on escape key
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape" && open) setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // prevent background scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // auto close on navigation
  const onNavClick = () => {
    if (open) setOpen(false);
  };

  //  LOGOUT HANDLER
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
          <a href="#hero" className={styles.logo} onClick={() => navigate("/")}>
             {/* Text logo with a dot for professional touch */}
             Shivam<span className={styles.dot}>.</span>
          </a>
        </div>

        {/* Existing Button and Backdrop code... */}

        <ul id="primary-navigation" ref={navRef} className={`${styles.navList} ${open ? styles.active : ""}`}>
          <NavItem href="#hero" onClick={onNavClick}>Home</NavItem>
          <NavItem href="#about" onClick={onNavClick}>About</NavItem>
          <NavItem href="#skills" onClick={onNavClick}>Skills</NavItem>
          <NavItem href="#projects" onClick={onNavClick}>Projects</NavItem>
          <NavItem href="#contact" onClick={onNavClick}>Contact</NavItem>

          {isLoggedIn ? (
            <li className={styles.navItem}>
              <button className={styles.authBtn} onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <li className={styles.navItem}>
              <button className={styles.authBtn} onClick={() => { setOpen(false); navigate("/auth-demo"); }}>
                Login
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
