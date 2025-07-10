import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';
import courses from './coursesData';
import './WishlistPage.css';

function WishlistNavSimple() {
  return (    <nav className="wishlist-nav-simple">
      <div className="wishlist-nav-logo">Learning Hub</div>
      <div className="wishlist-nav-links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {/* <Link to="/wishlist" style={{ color: '#e63946', textDecoration: 'none', fontWeight: 700 }} aria-label="Wishlist">♥ Wishlist</Link> */}
      </div>
    </nav>
  );
}

function WishlistPage() {  
  const [wishlistCourses, setWishlistCourses] = useState([]);

  useEffect(() => {
    const wishlistIds = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistedCourses = courses.filter(course => wishlistIds.includes(course.id));
    setWishlistCourses(wishlistedCourses);
  }, []);

  return (
    <div className="wishlist-page">
      <WishlistNavSimple />
      <div className="wishlist-container">
        <h2>My Wishlist</h2>
        {wishlistCourses.length === 0 ? (
          <div className="empty-wishlist">No courses in your wishlist yet.</div>
        ) : (
          <ul className="wishlist-course-list">
          {wishlistCourses.map(course => (
              <li key={course.id} className="wishlist-course-item">
                <CourseCard course={course} />
              </li>              
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default WishlistPage;
