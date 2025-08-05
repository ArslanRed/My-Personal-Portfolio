import React from "react";
import "./pages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJs, faCss3Alt, faHtml5, faPhp, faPython, faJava } from "@fortawesome/free-brands-svg-icons";
import { faWind, faFire, faShoppingCart, faDatabase } from "@fortawesome/free-solid-svg-icons";


const skills = [
  { icon: faReact, title: "React", color: "#61DBFB" },
  { icon: faJs, title: "JavaScript", color: "#F7DF1E" },
  { icon: faCss3Alt, title: "CSS3", color: "#264de4" },
  { icon: faHtml5, title: "HTML5", color: "#e34c26" },
  { icon: faWind, title: "Tailwind", color: "#38bdf8" },
  { icon: faFire, title: "GSAP", color: "#88CE02" },
  { icon: faShoppingCart, title: "Shopify", color: "#96bf48" },
  { icon: faPhp, title: "PHP", color: "#8993be" },
  { icon: faDatabase, title: "MySQL", color: "#00758F" },
  { icon: faPython, title: "Python", color: "#3776AB" },
  { icon: faJava, title: "Java", color: "#f89820" },
];



const Pages = () => {
  return (
    <div className="Banner-holder">
      
      <div className="banner">
        <h1 className="Banner-Head">My linkedIn Banner</h1>
        <div className="icons-circle">
          <div className="icons-circleitself">
            {skills.map((skill, index) => {
              const angle = (360 / skills.length) * index;
              return (
                <div
                  className="pentagon-icon-wrapper"
                  key={index}
                  style={{ transform: `rotate(${angle}deg) translate(100px) rotate(-${angle}deg)` }}
                  title={skill.title}


                >
                  <div className="pentagon-icon">
                    <FontAwesomeIcon icon={skill.icon} size="lg" style={{ color: skill.color }} />

                  </div>
                </div>
              );
            })}
          </div>
          <div className="circle-center">
            <h1>Arslan Khan</h1>
            <h2>Front-End Developer</h2>
          </div>
        </div>

        <div className="banner-content">
          <p className="subtitle">Building modern UIs with motion, logic, and creativity.</p>
          <div className="tech-stack">
            <span>React</span>
            <span>JavaScript</span>
            <span>Three.js</span>
            <span>GSAP</span>
            <span>Tailwind CSS</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>Firebase</span>
            <span>PHP</span>
            <span>MySQL</span>
            <span>Shopify</span>
            <span>Python</span>
            <span>Java</span>
            <span>C++</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages;
