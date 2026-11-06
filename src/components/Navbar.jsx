import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

export default function Navbar({ resumeUrl }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'education', 'projects', 'internship', 'certifications', 'contact'];
      const scrollY = window.pageYOffset;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 140;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Internship', href: '#internship' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="navbar-wrapper" id="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-logo" aria-label="K. Madhavi Home">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Madhavi</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        {/* Desktop Menu */}
        <nav className={`nav-menu ${isOpen ? 'open' : ''}`} id="navMenu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href={resumeUrl}
            download="K_Madhavi_Resume.pdf"
            className="nav-btn-resume desktop-only"
          >
            <Download size={16} />
            <span>Resume</span>
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="nav-toggle"
          id="navToggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} color="#f8fafc" /> : <Menu size={24} color="#f8fafc" />}
        </button>
      </div>
    </header>
  );
}

