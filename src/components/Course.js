import React from 'react';
import CourseNavbar from './CourseNavbar';
import CourseSidebar from './CourseSidebar';
import CourseHeader from './CourseHeader';
import CourseList from './CourseList';
import './CourseNavbar.css';
import './CourseSidebar.css';

function Course() {
  return (
    <>
      <CourseNavbar />
      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
        <CourseSidebar />
        <div style={{ flex: 1 }}>
          <CourseHeader />
          <CourseList />
        </div>
      </div>
    </>
  );
}

export default Course;
