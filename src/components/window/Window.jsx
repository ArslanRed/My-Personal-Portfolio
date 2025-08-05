import React from 'react';
import './Window.css';

const Window = ({ heading, description, caption, skills }) => {
  return (
    <div>
      <h2>My Components</h2>
    
    <section className="section">
      <h2 className="heading">{heading}</h2>
      <p className="description">{description}</p>
      <div className="card-container">
        <div className="grid-background" />
        <div className="glow"></div>
        <div className="command-box">
          <div className="command-title">React Skills</div>
          {skills.map((skill, index) => (
            <div className="command-item" key={index}>
              <span>{skill.name}</span>
              <span className="shortcut">{skill.level}</span>
            </div>
          ))}
        </div>
        <div className="card-caption">
          <strong>Elevate your UI/UX.</strong> {caption}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Window;
