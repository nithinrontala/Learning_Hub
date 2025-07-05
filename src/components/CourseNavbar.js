import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CourseNavbar.css';

function CourseNavbar() {
  const navigate = useNavigate();
  return (
    <header className="course-navbar">
      <div className="course-navbar-left">
        <span className="logo-text">Learning Hub</span>
        <nav className="course-navbar-links">
          <span>My Learning</span>
          <span style={{cursor: 'pointer'}} onClick={() => navigate('/')}>Home</span>
        </nav>
      </div>    
      <div className="course-navbar-right">
        <input type="text" placeholder="Search" className="course-navbar-search" />
        <button className="course-navbar-wishlist">Wishlist</button>
        <span className="course-navbar-bell">&#128276;</span>
        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="profile" className="course-navbar-profile" />
      </div>
    </header>
  );
}

export default CourseNavbar;
