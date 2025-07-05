import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-icon">&#128187;</span> {/* Developer/tech icon */}
        <span className="logo-text">Learning Hub</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#courses">Courses</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-actions">
        <a href="#signup" className="btn btn-signup">Sign Up</a>
        <a href="#login" className="btn btn-login">Login</a>
      </div>
    </nav>
  );
}

export default Navbar;