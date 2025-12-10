// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";

import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/hero';
import About from './components/About/about';
import Skills from './components/Skills/skills';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import HealthProject from "./components/Pages/HealthProject";
import AuthUI from "./components/Pages/authUI";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectRouter />} />
          <Route path="/auth-demo" element={<AuthUI />} />
          <Route path="/contact" element={<Contact />} />
          {/* fallback to home */}
          <Route path="*" element={<HomeLayout />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

function HomeLayout() {
  // This renders your original home sections
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

/* This is  Map project id to page */
function ProjectRouter() {
  const { id } = useParams();

  if (id === "1") return <HealthProject />;
  if (id === "2")
    return (
      <div style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
        <h1>Portfolio Website</h1>
        <p>This is your portfolio project — <a href="https://portfolio-t7ka.onrender.com/" target="_blank" rel="noreferrer">open live</a></p>
      </div>
    );
  if (id === "3") return <AuthUI />;

  // default: show projects list
  return <Projects />;
}

export default App;
