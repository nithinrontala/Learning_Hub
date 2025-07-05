import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCourses from './components/FeaturedCourses';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Course from './components/Course';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <FeaturedCourses />
              <Footer />
            </>
          } />
          <Route path="/login" element={
            <>
              <Navbar />
              <Login />
              <Footer />
            </>
          } />
          <Route path="/signup" element={
            <>
              <Navbar />
              <Signup />
              <Footer />
            </>
          } />
          <Route path="/courses" element={<Course />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
