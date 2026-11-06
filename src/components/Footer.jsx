import React from 'react';
import { Download } from 'lucide-react';

export default function Footer({ personal }) {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <a href="#home" className="nav-logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-name">Madhavi</span>
            <span className="logo-bracket">/&gt;</span>
          </a>
          <p className="footer-tagline">Aspiring Software Developer | MCA Student</p>
          <p className="footer-sub">Aditya Degree &amp; PG College &bull; Visakhapatnam, Andhra Pradesh</p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#internship">Internship</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} K. Madhavi. Designed &amp; Developed with React &amp; Modern Web Standards.</p>
          <div className="footer-actions">
            <a href={personal.resumePath} download="K_Madhavi_Resume.pdf" className="footer-resume-link">
              <Download size={16} /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

