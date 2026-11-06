import React from 'react';
import { Code, Database, Cloud, Shield, Languages, CheckCircle } from 'lucide-react';

export default function Certifications({ certifications }) {
  const getCertIcon = (index) => {
    switch (index) {
      case 0: return <Code size={22} />;
      case 1: return <Database size={22} />;
      case 2: return <Cloud size={22} />;
      case 3: return <Shield size={22} />;
      case 4: return <Languages size={22} />;
      default: return <Code size={22} />;
    }
  };

  return (
    <section className="section certifications-section" id="certifications">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">06. Credentials</span>
          <h2 className="section-title">
            Certifications &amp; <span className="gradient-text">Credentials</span>
          </h2>
          <div className="title-bar"></div>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, idx) => (
            <div className="cert-card glass-panel" key={cert.title}>
              <div>
                <div className="cert-header">
                  <div className="cert-icon-box">{getCertIcon(idx)}</div>
                  <span className="cert-issuer">{cert.issuer}</span>
                </div>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-desc">{cert.desc}</p>
              </div>
              <div className="cert-footer">
                <span className="cert-status">
                  <CheckCircle size={16} /> {cert.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

