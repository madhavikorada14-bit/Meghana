import React from 'react';
import { UserCheck, Target, MapPin, GraduationCap, Mail, Phone, Check } from 'lucide-react';

export default function About({ personal }) {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">01. Who I Am</span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="title-bar"></div>
        </div>

        <div className="about-grid">
          <div className="about-card glass-panel">
            <div className="about-icon-header">
              <div className="icon-circle">
                <UserCheck size={24} />
              </div>
              <h3>Professional Background</h3>
            </div>
            <p className="about-text">{personal.aboutText1}</p>
            <p className="about-text">{personal.aboutText2}</p>

            <div className="quick-info-grid">
              <div className="info-item">
                <span className="info-label">
                  <MapPin size={14} /> Location:
                </span>
                <span className="info-value">{personal.location}</span>
              </div>
              <div className="info-item">
                <span className="info-label">
                  <GraduationCap size={14} /> Degree:
                </span>
                <span className="info-value">Master of Computer Applications (MCA)</span>
              </div>
              <div className="info-item">
                <span className="info-label">
                  <Mail size={14} /> Email:
                </span>
                <span className="info-value">
                  <a href={`mailto:${personal.email}`}>{personal.email}</a>
                </span>
              </div>
              <div className="info-item">
                <span className="info-label">
                  <Phone size={14} /> Phone:
                </span>
                <span className="info-value">
                  <a href={`tel:${personal.phone.replace(/[^0-9]/g, '')}`}>{personal.phone}</a>
                </span>
              </div>
            </div>
          </div>

          <div className="career-objective-card glass-panel">
            <div className="objective-header">
              <div className="icon-circle pulse-glow">
                <Target size={24} />
              </div>
              <h3>Career Objective</h3>
            </div>
            <blockquote className="objective-quote">
              "{personal.objective}"
            </blockquote>

            <div className="competencies-box">
              <h4>Core Strengths</h4>
              <div className="pills-flex">
                <span className="pill"><Check size={14} /> Software Engineering</span>
                <span className="pill"><Check size={14} /> Object-Oriented Design</span>
                <span className="pill"><Check size={14} /> Database Optimization</span>
                <span className="pill"><Check size={14} /> Cloud Fundamentals</span>
                <span className="pill"><Check size={14} /> Fast Learner &amp; Adaptable</span>
                <span className="pill"><Check size={14} /> Analytical Problem Solving</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

