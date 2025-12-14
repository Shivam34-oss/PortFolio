// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";

import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import AuthUI from "./components/Pages/authui";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/projects/:id" element={<ProjectRouter />} />
          <Route path="/auth-demo" element={<AuthUI />} />
          <Route path="*" element={<HomeLayout />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

function HomeLayout() {
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

function ProjectRouter() {
  const { id } = useParams();

  if (id === "auth") {
    return <AuthUI />;
  }

  return <Projects />;
}

export default App;

