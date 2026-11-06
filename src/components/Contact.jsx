import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Contact({ personal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry - ${formData.subject}] from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi K. Madhavi,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nSent from Portfolio Website`
    )}`;

    setSubmitted(true);
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">07. Get In Touch</span>
          <h2 className="section-title">
            Let's Connect and <span className="gradient-text">Build Something Amazing!</span>
          </h2>
          <div className="title-bar"></div>
        </div>

        <div className="contact-grid">
          {/* Direct Contact Info */}
          <div className="contact-info-card glass-panel">
            <h3>Reach Out Directly</h3>
            <p className="contact-intro">
              I am currently open to Entry-Level Software Engineer, Graduate Engineer Trainee, and Software Developer opportunities. Feel free to contact me directly!
            </p>

            <div className="contact-channels">
              <a href={`mailto:${personal.email}`} className="channel-link">
                <div className="channel-icon"><Mail size={20} /></div>
                <div>
                  <strong>Email Address</strong>
                  <p>{personal.email}</p>
                </div>
              </a>

              <a href={`tel:${personal.phone.replace(/[^0-9]/g, '')}`} className="channel-link">
                <div className="channel-icon"><Phone size={20} /></div>
                <div>
                  <strong>Phone Number</strong>
                  <p>{personal.phone}</p>
                </div>
              </a>

              <div className="channel-link">
                <div className="channel-icon"><MapPin size={20} /></div>
                <div>
                  <strong>Location</strong>
                  <p>{personal.location}</p>
                </div>
              </div>
            </div>

            <div className="contact-social-section">
              <h4>Social Channels</h4>
              <div className="social-btn-group">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-chip-btn">
                  <LinkedinIcon size={18} />
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-chip-btn">
                  <GithubIcon size={18} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card glass-panel">
            <h3>Send a Direct Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="userName">Your Name <span className="req">*</span></label>
                <input
                  type="text"
                  id="userName"
                  required
                  placeholder="e.g. Recruiter / Hiring Manager"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="userEmail">Your Email <span className="req">*</span></label>
                <input
                  type="email"
                  id="userEmail"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="msgSubject">Subject <span className="req">*</span></label>
                <input
                  type="text"
                  id="msgSubject"
                  required
                  placeholder="Interview Inquiry / Software Developer Role"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="msgContent">Message <span className="req">*</span></label>
                <textarea
                  id="msgContent"
                  rows="4"
                  required
                  placeholder="Write your message or role details here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                <Send size={18} />
                <span>Send Message</span>
              </button>

              {submitted && (
                <div className="form-notification success" style={{ display: 'block' }}>
                  <strong>Thank you, {formData.name}!</strong><br />
                  Opening your default email app to deliver this inquiry directly to <code>{personal.email}</code>.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
