import React from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero-section">
      <div className="hero-bg">
        <div className="hero-content">
          <h1>Discover Future-Ready Online <br />Programs</h1>
          <button className="hero-btn" onClick={() => navigate('/courses')}>Browse Courses</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
