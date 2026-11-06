import React, { useState, useEffect } from 'react';
import { ArrowRight, FileDown, Mail, Phone, Code2, Cloud, Database } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Hero({ personal, typewriterTitles }) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = typewriterTitles[titleIndex];
    let timer;

    if (!isDeleting && displayText.length < currentTitle.length) {
      timer = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      }, 90);
    } else if (!isDeleting && displayText.length === currentTitle.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length - 1));
      }, 45);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % typewriterTitles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, typewriterTitles]);

  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge-status">
            <span className="status-dot"></span>
            <span>Open to Software Engineer &amp; Developer Roles</span>
          </div>

          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">
            K. <span className="gradient-text">MADHAVI</span>
          </h1>

          <div className="typewriter-box">
            <span className="static-prefix">I am an </span>
            <span className="typed-text">{displayText}</span>
            <span className="cursor">&nbsp;</span>
          </div>

          <p className="hero-bio">{personal.bio}</p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              <span>Explore My Work</span>
              <ArrowRight size={18} />
            </a>
            <a href={personal.resumePath} download="K_Madhavi_Resume.pdf" className="btn btn-secondary">
              <FileDown size={18} />
              <span>Download Resume</span>
            </a>
          </div>

          <div className="hero-socials">
            <span className="socials-label">Connect:</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>
            <a href={`mailto:${personal.email}`} className="social-icon" aria-label="Send Email">
              <Mail size={18} />
            </a>
            <a href={`tel:${personal.phone.replace(/[^0-9]/g, '')}`} className="social-icon" aria-label="Direct Phone">
              <Phone size={18} />
            </a>
          </div>
        </div>

        {/* Profile Card & Avatar */}
        <div className="hero-visual">
          <div className="avatar-glow"></div>
          <div className="avatar-wrapper">
            <img
              src={personal.profileImg}
              alt="K. Madhavi Profile Photo"
              className="profile-photo"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80";
              }}
            />
          </div>

          {/* Floating Technology Badges */}
          <div className="floating-badge badge-top-left float-anim">
            <Code2 size={20} className="badge-icon-cyan" />
            <div className="badge-text">
              <strong>Core Java &amp; Python</strong>
              <small>Programming</small>
            </div>
          </div>

          <div className="floating-badge badge-bottom-right float-anim-delayed">
            <Cloud size={20} className="badge-icon-purple" />
            <div className="badge-text">
              <strong>AWS Cloud Intern</strong>
              <small>Cloud Infrastructure</small>
            </div>
          </div>

          <div className="floating-badge badge-top-right float-anim">
            <Database size={20} className="badge-icon-blue" />
            <div className="badge-text">
              <strong>DBMS &amp; SQL</strong>
              <small>Data Architecture</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
