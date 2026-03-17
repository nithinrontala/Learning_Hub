import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" style={{textDecoration: 'none'}}>
        <span className="logo-icon">&#128187;</span>
        <span className="logo-text">Learning Hub</span>
      </Link>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-actions">
        {isAuthenticated && user ? (
          <div className="user-menu" style={{ position: 'relative' }}>
            <button 
              className="user-button"
              onClick={() => setShowDropdown(!showDropdown)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: '#7b8794',
                fontSize: '14px'
              }}
            >
              <span>👤 {user.fullName || user.email.split('@')[0]}</span>
              <span>▼</span>
            </button>
            {showDropdown && (
              <div style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                background: 'white',
                border: '1px solid #e0e0e0',
                borderRadius: '4px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                zIndex: 1000,
                minWidth: '200px',
                marginTop: '10px'
              }}>
                <div style={{
                  padding: '10px 15px',
                  borderBottom: '1px solid #e0e0e0',
                  fontSize: '12px',
                  color: '#666'
                }}>
                  {user.email}
                </div>
                <Link 
                  to="/dashboard" 
                  style={{
                    display: 'block',
                    padding: '10px 15px',
                    color: '#7b8794',
                    textDecoration: 'none',
                    fontSize: '14px'
                  }}
                  onClick={() => setShowDropdown(false)}
                >
                  📊 Dashboard
                </Link>
                <Link 
                  to="/wishlist" 
                  style={{
                    display: 'block',
                    padding: '10px 15px',
                    color: '#7b8794',
                    textDecoration: 'none',
                    fontSize: '14px'
                  }}
                  onClick={() => setShowDropdown(false)}
                >
                  🎯 My Wishlist
                </Link>
                <button
                  onClick={handleLogout}
                  style={{
                    width: '100%',
                    padding: '10px 15px',
                    background: 'none',
                    border: 'none',
                    borderTop: '1px solid #e0e0e0',
                    textAlign: 'left',
                    cursor: 'pointer',
                    color: '#e74c3c',
                    fontSize: '14px'
                  }}
                >
                  🚪 Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to="/signup" className="btn btn-signup">Sign Up</Link>
            <Link to="/login" className="btn btn-login">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;