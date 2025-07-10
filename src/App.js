import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCourses from './components/FeaturedCourses';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Course from './components/Course';
import ProgramHeader from './components/ProgramHeader';
import FcourseDetail from './components/FcourseDetail';
import ApplicationForm from './components/ApplicationForm';
import ApplicationSubmitted from './components/ApplicationSubmitted';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import WishlistPage from './components/WishlistPage';

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
          <Route path="/about" element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          } />
          <Route path="/courses" element={<Course />} />
          <Route path="/program/:id" element={<ProgramHeader />} />
          <Route path="/fcourse/:id" element={<FcourseDetail />} />
          <Route path="/apply" element={<ApplicationForm />} />
          <Route path="/application-submitted" element={<ApplicationSubmitted />} />
          <Route path="/contact" element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/about" element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          } />
          <Route path="/wishlist" element={<WishlistPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
