import React from 'react';
import { Link } from 'react-router-dom';

function WishlistNavSimple() {
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: '#f8f9fa', padding: '18px 40px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
      borderRadius: '0 0 12px 12px', marginBottom: 32
    }}>
      <div style={{ fontWeight: 700, fontSize: '1.5rem', color: 'black' }}>Learning Hub</div>
      <div style={{ display: 'flex', gap: '2.5rem', fontSize: '1.08rem', fontWeight: 500 }}>
        <Link to="/" style={{ color: '#222', textDecoration: 'none' }}>Home</Link>
        <Link to="/courses" style={{ color: '#222', textDecoration: 'none' }}>Courses</Link>
        <Link to="/about" style={{ color: '#222', textDecoration: 'none' }}>About</Link>
        <Link to="/contact" style={{ color: '#222', textDecoration: 'none' }}>Contact</Link>
        {/* <Link to="/wishlist" style={{ color: '#e63946', textDecoration: 'none', fontWeight: 700 }} aria-label="Wishlist">♥ Wishlist</Link> */}
      </div>
    </nav>
  );
}

function WishlistPage() {
  // Placeholder: Replace with actual wishlist logic
  const wishlistCourses = [];

  return (
    <div style={{ minHeight: '100vh', background: '#f7f8fa' }}>
      <WishlistNavSimple />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: 32 }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 24 }}>My Wishlist</h2>
        {wishlistCourses.length === 0 ? (
          <div style={{ color: '#6b7280', fontSize: '1.15rem' }}>No courses in your wishlist yet.</div>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {wishlistCourses.map(course => (
              <li key={course.id} style={{ marginBottom: 24, background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.03)', padding: 24 }}>
                <Link to={`/course/${course.id}`} style={{ color: '#1976d2', fontWeight: 600, fontSize: '1.18rem', textDecoration: 'none' }}>{course.title}</Link>
                <div style={{ color: '#4b5563', fontSize: '1.01rem', marginTop: 6 }}>{course.description}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default WishlistPage;
