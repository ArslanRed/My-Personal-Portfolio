import React from 'react'
import Window from './Window';
import Windowother from './Windowother';
import WindowJavascript from './WindowJavascript';
// import CursorVortex from './CursorVortex';
import './Windomain.css'
const Windowmain = () => {
const reactSkills = [
  { name: 'Reusable Components', level: 'Expert' },
  { name: 'State & Props Management', level: 'Expert' },
  { name: 'React Router Integration', level: 'Expert' },
  { name: 'Hooks (useState, useEffect, etc.)', level: 'Expert' },
  { name: 'Tailwind CSS Styling', level: 'Expert' },
  { name: 'Responsive Layouts', level: 'Expert' }
];
const skillSections = [
  {
    title: 'HTML & CSS Developer',
    description:
      'I specialize in crafting semantic, accessible HTML structures and styling beautiful, responsive layouts using modern CSS techniques and frameworks.',
    skillTitle: 'CSS Skills',
    skills: [
      'Semantic HTML5',
      'Flexbox & Grid Layout',
      'Responsive Design',
      'Animations & Transitions',
      'Custom Properties (CSS Variables)',
      'Media Queries',
    ],
    caption: {
      highlight: 'Master the visuals.',
      text: 'Craft responsive, accessible, and stunning interfaces using semantic HTML and modern CSS methodologies.',
    },
  } ]
  const javaSkills = [ {
    title: 'JavaScript Developer',
    description:
      'Fluent in ES6+, I build interactive interfaces and manage application state using modern JavaScript paradigms and tools.',
    skillTitle: 'JavaScript Skills',
    skills: [
      'ES6+ Syntax',
      'DOM Manipulation',
      '(Promises, Async/Await)',
      'Fetch API & RESTful APIs',
      'JavaScript Debugging',
      'JavaScript Modules',
    ],
    caption: {
      highlight: 'Make it dynamic.',
      text: 'Add interactivity and business logic to your interfaces with confidence and modern patterns.',
    },
  },
  // Add more sections as needed
];

  return (
      <div className="window-containers">
        
      <div className="window-left">
        <div className="window-item">
          <Window
            heading="Frontend Developer"
            description="I specialize in building modern, responsive, and performant user interfaces using React, Tailwind, and modern JavaScript libraries."
            caption="Build seamless, scalable, and maintainable React applications with production-ready standards."
            skills={reactSkills}
          />
        </div>
      </div>
      <div className="window-right">
        {skillSections.map((section, index) => (
          <div className="window-item" key={index}>
            <Windowother
              title={section.title}
              description={section.description}
              skillTitle={section.skillTitle}
              skills={section.skills}
              caption={section.caption}
            />
          </div>
        ))}
        {javaSkills.map((section, index) => (
          <div className="window-item" key={index}>
            <WindowJavascript
              title={section.title}
              description={section.description}
              skillTitle={section.skillTitle}
              skills={section.skills}
              caption={section.caption}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Windowmain