
import Navbar from './components/navbar/navbar'
import Hero from './components/Hero/hero'
import About from './components/About/about'
import Skills from './components/Skills/skills'
import Projects from './components/Projects/projects'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer/>
    </>
  )
}

export default App
