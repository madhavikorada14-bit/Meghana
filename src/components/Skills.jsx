import React from 'react';
import { Terminal, Database, CloudLightning, Layout, Cpu, Boxes, GitBranch, Puzzle, Bug } from 'lucide-react';

export default function Skills({ skills }) {
  const conceptIcons = [
    <Boxes size={22} />,
    <GitBranch size={22} />,
    <Puzzle size={22} />,
    <Bug size={22} />
  ];

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">02. Capabilities</span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-sub">Honest evaluation based on academic rigor and practical project exposure</p>
          <div className="title-bar"></div>
        </div>

        <div className="skills-grid">
          {/* Programming Languages */}
          <div className="skill-category-card glass-panel">
            <div className="category-header">
              <div className="cat-icon cat-cyan"><Terminal size={22} /></div>
              <h3>Programming Languages</h3>
            </div>
            <div className="skills-list">
              {skills.programming.map((s) => (
                <div className="skill-item" key={s.name}>
                  <div className="skill-meta">
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-level">{s.level}</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill fill-cyan" style={{ width: `${s.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Database Systems */}
          <div className="skill-category-card glass-panel">
            <div className="category-header">
              <div className="cat-icon cat-blue"><Database size={22} /></div>
              <h3>Database Systems</h3>
            </div>
            <div className="skills-list">
              {skills.database.map((s) => (
                <div className="skill-item" key={s.name}>
                  <div className="skill-meta">
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-level">{s.level}</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill fill-blue" style={{ width: `${s.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cloud Technologies */}
          <div className="skill-category-card glass-panel">
            <div className="category-header">
              <div className="cat-icon cat-purple"><CloudLightning size={22} /></div>
              <h3>Cloud Technologies</h3>
            </div>
            <div className="skills-list">
              {skills.cloud.map((s) => (
                <div className="skill-item" key={s.name}>
                  <div className="skill-meta">
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-level">{s.level}</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill fill-purple" style={{ width: `${s.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Web Technologies */}
          <div className="skill-category-card glass-panel">
            <div className="category-header">
              <div className="cat-icon cat-amber"><Layout size={22} /></div>
              <h3>Web Technology</h3>
            </div>
            <div className="skills-list">
              {skills.web.map((s) => (
                <div className="skill-item" key={s.name}>
                  <div className="skill-meta">
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-level">{s.level}</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill fill-amber" style={{ width: `${s.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Concepts */}
          <div className="skill-category-card glass-panel full-width">
            <div className="category-header">
              <div className="cat-icon cat-emerald"><Cpu size={22} /></div>
              <h3>Core Engineering Concepts</h3>
            </div>
            <div className="badges-wall">
              {skills.concepts.map((concept, index) => (
                <div className="concept-card" key={concept.title}>
                  {conceptIcons[index % conceptIcons.length]}
                  <div>
                    <strong>{concept.title}</strong>
                    <p>{concept.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

