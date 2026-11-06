import React from 'react';
import { Cloud, Server, HardDrive, Globe } from 'lucide-react';

export default function Internship({ internship }) {
  const pillarIcons = [
    <Server size={20} />,
    <HardDrive size={20} />,
    <Globe size={20} />
  ];

  return (
    <section className="section internship-section" id="internship">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">05. Professional Experience</span>
          <h2 className="section-title">
            Internship <span className="gradient-text">Experience</span>
          </h2>
          <div className="title-bar"></div>
        </div>

        <div className="internship-showcase">
          <div className="intern-card glass-panel">
            <div className="intern-card-header">
              <div className="intern-company-badge">
                <Cloud size={28} />
              </div>
              <div className="intern-title-group">
                <h3 className="intern-role">{internship.role}</h3>
                <h4 className="intern-company">{internship.company}</h4>
              </div>
              <div className="intern-badge-tag">{internship.category}</div>
            </div>

            <div className="intern-body">
              <p className="intern-desc">{internship.desc}</p>

              <div className="intern-key-points">
                {internship.pillars.map((pillar, i) => (
                  <div className="key-point-item" key={pillar.title}>
                    <div className="point-icon">{pillarIcons[i]}</div>
                    <div className="point-content">
                      <strong>{pillar.title}</strong>
                      <p>{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="intern-tech-stack">
                {internship.techStack.map((tech) => (
                  <span className="tech-chip" key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

