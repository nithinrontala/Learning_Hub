import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './utils/ProtectedRoute';
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
import Dashboard from './components/Dashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Auth Routes */}
            <Route path="/login" element={
              <>
                <Login />
              </>
            } />
            <Route path="/signup" element={
              <>
                <Signup />
              </>
            } />

            {/* Protected Routes */}
            <Route path="/" element={
              <ProtectedRoute>
                <>
                  <Navbar />
                  <Hero />
                  <FeaturedCourses />
                  <Footer />
                </>
              </ProtectedRoute>
            } />
            
            <Route path="/about" element={
              <ProtectedRoute>
                <>
                  <Navbar />
                  <About />
                  <Footer />
                </>
              </ProtectedRoute>
            } />
            
            <Route path="/courses" element={
              <ProtectedRoute>
                <Course />
              </ProtectedRoute>
            } />
            
            <Route path="/program/:id" element={
              <ProtectedRoute>
                <ProgramHeader />
              </ProtectedRoute>
            } />
            
            <Route path="/fcourse/:id" element={
              <ProtectedRoute>
                <FcourseDetail />
              </ProtectedRoute>
            } />
            
            <Route path="/apply" element={
              <ProtectedRoute>
                <ApplicationForm />
              </ProtectedRoute>
            } />
            
            <Route path="/application-submitted" element={
              <ProtectedRoute>
                <ApplicationSubmitted />
              </ProtectedRoute>
            } />
            
            <Route path="/contact" element={
              <ProtectedRoute>
                <>
                  <Navbar />
                  <Contact />
                  <Footer />
                </>
              </ProtectedRoute>
            } />
            
            <Route path="/wishlist" element={
              <ProtectedRoute>
                <WishlistPage />
              </ProtectedRoute>
            } />
            
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <>
                  <Navbar />
                  <Dashboard />
                  <Footer />
                </>
              </ProtectedRoute>
            } />

            {/* Catch all - redirect to login */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
