// src/components/SkillWindow.jsx
import React, {useEffect, useRef} from 'react';
import './WindowJavascript.css';

const WindowJavascript = ({ title, description, skillTitle, skills, caption }) => {

  useEffect(() => {
    const section = document.querySelector('.section2');
    const light = document.querySelector('.cursor-light2');

    const moveLight = (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      light.style.left = `${x}px`;
      light.style.top = `${y}px`;
    };

    section.addEventListener('mousemove', moveLight);

    return () => section.removeEventListener('mousemove', moveLight);
  }, []);

  return (
    <section className="section2">
      <div className="cursor-light2"></div>
      <div className="vortex-light"></div>
      <div className="cloud-blur"></div>
      <h2 className="heading2">{title}</h2>
      <p className="description2">{description}</p>
      <div className="card-container2">
        <div className="glow2"></div>
        <div className="command-box2">
          <div className="command-title2">{skillTitle}</div>
          {skills.map((skill, index) => (
            <div className="command-item2" key={index}>
              <span>{skill}</span>
              <span className="shortcut2">Expert</span>
            </div>
          ))}
        </div>
        <div className="card-caption2">
          <strong>{caption.highlight}</strong> {caption.text}
        </div>
      </div>
    </section>
  );
};

export default WindowJavascript;
