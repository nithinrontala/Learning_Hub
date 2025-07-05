import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCourses from './components/FeaturedCourses';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <FeaturedCourses />
    </div>
  );
}

export default App;
