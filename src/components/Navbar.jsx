import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-wrapper">
          {/* Logo */}
          <Link to="/" className="logo">
           <img src="/logo.png" alt='igosevent'/>
          </Link>

          {/* Desktop Menu */}
          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
            <li><Link to="/gallery" onClick={toggleMenu}>Gallery</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>

          {/* CTA Button */}
         <Link to="/contact" className="btn btn-primary nav-cta">
  Get Quote (Nationwide)
</Link>

          {/* Mobile Hamburger */}
          <div 
            className={`hamburger ${isOpen ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;