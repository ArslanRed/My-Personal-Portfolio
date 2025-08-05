import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt ,FaWhatsapp  } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
  ↑ Back to Top
</button>

  return (
    <div className='myfoot'>
    <footer className="footer">
      <div className="footer-brand">Arslan Khan – Front-End Developer</div>

      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>

      <div className="footer-icons">
        <a href="mailto:2000arslan03@gmail.com" aria-label="Email"><FaEnvelope /></a>
        <a href="tel:+923441895040" aria-label="Phone"><FaPhoneAlt /></a>
        <a href="https://github.com/ArslanRed" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/arslan-khan-8a20662b3/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://wa.me/923441895040" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Arslan Khan. All rights reserved.
      </div>
    </footer>
    </div>
  );
};

export default Footer;
