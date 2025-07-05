import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" style={{textDecoration: 'none'}}>
        <span className="logo-icon">&#128187;</span>
        <span className="logo-text">Learning Hub</span>
      </Link>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-actions">
        <Link to="/signup" className="btn btn-signup">Sign Up</Link>
        <Link to="/login" className="btn btn-login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;