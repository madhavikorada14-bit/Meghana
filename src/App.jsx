import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Project from './components/Project';
import Internship from './components/Internship';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AmbientCanvas from './components/AmbientCanvas';
import BackToTop from './components/BackToTop';
import { portfolioData } from './portfolioData';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-root">
      {/* Preloader */}
      {loading && (
        <div id="preloader" className="preloader">
          <div className="loader-content">
            <div className="loader-ring"></div>
            <div className="loader-text">&lt;K. Madhavi /&gt;</div>
            <p className="loader-sub">Preparing portfolio experience...</p>
          </div>
        </div>
      )}

      {/* Dynamic Ambient Background Canvas */}
      <AmbientCanvas />

      {/* Main Portfolio Components */}
      <Navbar resumeUrl={portfolioData.personal.resumePath} />
      <main>
        <Hero
          personal={portfolioData.personal}
          typewriterTitles={portfolioData.typewriterTitles}
        />
        <About personal={portfolioData.personal} />
        <Skills skills={portfolioData.skills} />
        <Education education={portfolioData.education} />
        <Project project={portfolioData.project} />
        <Internship internship={portfolioData.internship} />
        <Certifications certifications={portfolioData.certifications} />
        <Contact personal={portfolioData.personal} />
      </main>
      <Footer personal={portfolioData.personal} />
      <BackToTop />
    </div>
  );
}

