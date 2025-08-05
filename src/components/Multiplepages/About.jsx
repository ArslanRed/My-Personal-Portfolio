import React from 'react';
import './About.css';
import Footer from '../footer/Footer.jsx'
const About = () => {
  return (
    <section className="about-container">
      <div className="about-text">
        <h1>About Me</h1>
        <p>
          I'm Arslan Khan, a results-driven Front-End Developer from Abbottabad with over 4 years of experience crafting scalable, animated, and responsive web applications. My passion lies in building clean, performant interfaces using modern technologies like React, Tailwind CSS, and advanced animation tools such as GSAP and Three.js.
        </p>
        <p>
          I specialize in reusable components, optimized UI/UX, and backend integration with Firebase and MySQL. I've delivered 15+ high-quality projects ranging from interactive SPAs and utility apps to full-stack clones and e-commerce solutions. Whether freelancing or working with international clients remotely, I focus on clean code and smooth user experiences.
        </p>

        <h2>Tech Stack</h2>
        <ul>
          <li>React.js, JavaScript (ES6+)</li>
          <li>Tailwind CSS, HTML5, CSS3</li>
          <li>GSAP, Three.js (Web Animation)</li>
          <li>Firebase, MySQL, PHP</li>
          <li>Shopify (Custom Front-End)</li>
          <li>Git, GitHub, VS Code, DevTools</li>
        </ul>

        <h2>Focus Areas</h2>
        <ul>
          <li>Performance Optimization & Responsive Design</li>
          <li>Component-Based Architecture</li>
          <li>Real-Time Data Integration</li>
          <li>Creative Animations & UI Enhancements</li>
        </ul>
      </div>
    </section>
    
  );
};

export default About;
