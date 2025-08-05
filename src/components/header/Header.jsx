import React, { useState } from 'react';
import './Header.css';
import arslanImg from './arslan.jpeg';
import { Link } from 'react-router-dom';
import Button from '../button/Button.jsx';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <div className='imgtext-container'>
          <img className='my-img' src={arslanImg} alt='arslan' />
          <h4>Arslan Khan</h4>
        </div>

        <nav className='navBar'>
          <button style={{ marginRight: '20px' }} className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>

          <div className={`div-btn ${menuOpen ? 'open' : ''}`}>
            <Button className="nav-home">
              <Link to="/">Home</Link>
            </Button>
            <Button className="nav-projects">
              <Link to="/projects">Projects</Link>
            </Button>
            <Button className="nav-about">
              <Link to="/about">About</Link>
            </Button>
            <Button className="nav-contact">
              <Link to="/ContactForm">Contact</Link>
            </Button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
