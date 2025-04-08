import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>
      <ul className="nav-links">
        <li><a href="#about">Experience</a></li>
        <li><a href="#skills">Skill</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
