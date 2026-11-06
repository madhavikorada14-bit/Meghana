import React from 'react';
import { Calendar } from 'lucide-react';

export default function Education({ education }) {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">03. Academic Journey</span>
          <h2 className="section-title">
            Education <span className="gradient-text">Timeline</span>
          </h2>
          <div className="title-bar"></div>
        </div>

        <div className="timeline-container">
          {education.map((item, idx) => (
            <div className="timeline-item" key={item.degree}>
              <div className={`timeline-marker ${idx === 0 ? 'active-marker' : ''}`}></div>
              <div className="timeline-card glass-panel">
                <div className="timeline-header">
                  {item.status ? (
                    <div className={`timeline-status-badge ${item.status === 'Graduated' ? 'completed' : ''}`}>
                      {item.status}
                    </div>
                  ) : item.score ? (
                    <div className="timeline-score-badge">{item.score}</div>
                  ) : null}
                  <span className="timeline-date">
                    <Calendar size={14} /> {item.period}
                  </span>
                </div>
                <h3 className="timeline-degree">{item.degree}</h3>
                <h4 className="timeline-institution">{item.institution}</h4>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

