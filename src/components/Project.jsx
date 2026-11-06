import React from 'react';
import { Lightbulb, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Project({ project }) {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">04. Hands-on Work</span>
          <h2 className="section-title">
            Academic <span className="gradient-text">Project</span>
          </h2>
          <div className="title-bar"></div>
        </div>

        <div className="projects-wrapper">
          <div className="project-spotlight glass-panel">
            <div className="project-visual">
              <div className="project-screen">
                <div className="iot-graphic">
                  <div className="smart-bulb-glow">
                    <Lightbulb size={44} className="bulb-icon" />
                  </div>
                  <div className="iot-signal-wave wave1"></div>
                  <div className="iot-signal-wave wave2"></div>
                  <div className="iot-nodes">
                    <span className="iot-node n1">Wi-Fi</span>
                    <span className="iot-node n2">Controller</span>
                    <span className="iot-node n3">Cloud</span>
                  </div>
                </div>
              </div>
              <div className="project-category-tag">{project.category}</div>
            </div>

            <div className="project-details">
              <div className="project-category-sub">{project.subTitle}</div>
              <h3 className="project-main-title">{project.title}</h3>
              <p className="project-full-desc">{project.desc}</p>

              <div className="tech-pills-row">
                {project.tags.map((tag) => (
                  <span className="tag-pill" key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-key-aspects">
                {project.highlights.map((highlight) => (
                  <div className="aspect-item" key={highlight}>
                    <CheckCircle2 size={16} />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="project-action-row">
                <span className="verified-project-note">
                  <ShieldCheck size={16} /> {project.verifiedNote}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

