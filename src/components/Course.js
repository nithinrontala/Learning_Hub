import React from 'react';
import CourseNavbar from './CourseNavbar';
import CourseSidebar from './CourseSidebar';
import './CourseNavbar.css';
import './CourseSidebar.css';

function Course() {
  return (
    <>
      <CourseNavbar />
      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
        <CourseSidebar />
        {/* Add your main course content here */}
        <div style={{ flex: 1 }}></div>
      </div>
    </>
  );
}

export default Course;
