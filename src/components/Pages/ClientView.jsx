import React from 'react';
import HeroClient from "../Hero/HeroClient";
import About from "../About/about";
import Skills from "../Skills/skills";
import ProjectsClient from "../Projects/ProjectsClient";
import ContactClient from "../Contact/ContactClient";
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function ClientView() {
  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden", position: "relative", backgroundColor: "#0f0f0f" }}>
      <Link 
        to="/" 
        style={{ 
          position: 'fixed', 
          top: '20px', 
          left: '20px', 
          zIndex: 9999, 
          padding: '12px 24px', 
          background: 'rgba(20, 20, 20, 0.8)', 
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '50px', 
          color: '#fff', 
          textDecoration: 'none', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '10px',
          fontWeight: '500',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          transition: 'transform 0.2s ease, background 0.2s ease'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'rgba(20, 20, 20, 0.8)'; }}
      >
        <ArrowLeft size={18} />
        Student View
      </Link>

      <HeroClient />
      <About />
      {/* Reuse Skills or remove if too student-focused, but keeping for completeness */}
      <Skills />
      <ProjectsClient />
      <ContactClient />
    </div>
  );
}