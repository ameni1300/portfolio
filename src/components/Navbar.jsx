import React from 'react';
import './Navbar.css';
import orbImage from '../assets/image1.png';
import logoIcon from '../assets/image2.png';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar" id="nav">
      <div className="navbar-left">
        <img src={orbImage} alt="Orb Logo" className="orb-logo" onClick={() => scrollToSection('home')} />
      </div>
      <ul className="navbar-right">
        <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('nav'); }}>Home</a></li>
        <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
        <li className="icon-item">
          <img src={logoIcon} alt="Logo Icon" className="logo-icon" />
        </li>
        <li><a href="#work" onClick={(e) => { e.preventDefault(); scrollToSection('works'); }}>Work</a></li>
        <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;