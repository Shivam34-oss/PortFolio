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

  // 🔐 CHECK LOGIN STATUS
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

  // 🚪 LOGOUT HANDLER
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
          <a
            href="#hero"
            className={styles.logo}
            onClick={() => navigate("/")}
          >
            Shivam Chauhan
          </a>
        </div>

        <button
          ref={toggleRef}
          className={`${styles.menuToggle} ${open ? styles.isActive : ""}`}
          onClick={toggle}
          aria-controls="primary-navigation"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <svg width="28" height="28" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path className={styles.bar1} d="M3 6h18"></path>
              <path className={styles.bar2} d="M3 12h18"></path>
              <path className={styles.bar3} d="M3 18h18"></path>
            </g>
          </svg>
        </button>

        {/* backdrop for mobile */}
        <div
          className={`${styles.backdrop} ${
            open ? styles.backdropVisible : ""
          }`}
          aria-hidden={!open}
        ></div>

        <ul
          id="primary-navigation"
          ref={navRef}
          className={`${styles.navList} ${open ? styles.active : ""}`}
        >
          <NavItem href="#hero" onClick={onNavClick}>
            Home
          </NavItem>
          <NavItem href="#about" onClick={onNavClick}>
            About
          </NavItem>
          <NavItem href="#skills" onClick={onNavClick}>
            Skills
          </NavItem>
          <NavItem href="#projects" onClick={onNavClick}>
            Projects
          </NavItem>
          <NavItem href="#contact" onClick={onNavClick}>
            Contact
          </NavItem>

          {/* 🔐 LOGIN / LOGOUT TOGGLE */}
          {isLoggedIn ? (
            <li className={styles.navItem}>
              <span
                className={styles.navLink}
                style={{ cursor: "pointer", color: "#ffb703" }}
                onClick={handleLogout}
              >
                Logout
              </span>
            </li>
          ) : (
            <li className={styles.navItem}>
              <span
                className={styles.navLink}
                style={{ cursor: "pointer", color: "#ffb703" }}
                onClick={() => {
                  setOpen(false);
                  navigate("/auth-demo");
                }}
              >
                Login
              </span>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
