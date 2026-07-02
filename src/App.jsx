import React, { useEffect, useState } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Services from './components/Services'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Certificates from './components/Certificates'
import SoftSkills from './components/SoftSkills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    let ticking = false

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
      setScrollProgress(Math.min(100, Math.max(0, progress)))
      ticking = false
    }

    // Throttle scroll-driven updates to once per animation frame so
    // fast/inertial scrolling (especially touch) doesn't queue up a
    // state update per event.
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        window.requestAnimationFrame(updateScrollProgress)
      }
    }

    updateScrollProgress()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', updateScrollProgress)
    window.addEventListener('load', updateScrollProgress)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', updateScrollProgress)
      window.removeEventListener('load', updateScrollProgress)
    }
  }, [])

  return (
    <>
      <div className="scroll-progress-track" aria-hidden="true">
        <div
          className="scroll-progress-fill"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />
      </div>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills />
      <Services />
      <Projects />
      <Experience />
      <Education />
      <Certificates />
      <SoftSkills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
