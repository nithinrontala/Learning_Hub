import React from 'react';
import './CourseSidebar.css';

function CourseSidebar() {
  return (
    <aside className="course-sidebar">
      <div className="course-sidebar-search-wrapper">
        <input className="course-sidebar-search" type="text" placeholder="Search for programs" />
        <button className="course-sidebar-search-go">Go</button>
      </div>
      <div className="course-sidebar-section">
        <div className="course-sidebar-title">Category</div>
        <label><input type="checkbox" /> Business</label>
        <label><input type="checkbox" /> Technology</label>
        <label><input type="checkbox" /> Arts & Humanities</label>
        <label><input type="checkbox" /> Health & Medicine</label>
        <label><input type="checkbox" /> Social Sciences</label>
      </div>
      <div className="course-sidebar-section">
        <div className="course-sidebar-title">Subject Area</div>
        <label><input type="checkbox" /> Marketing</label>
        <label><input type="checkbox" /> Data Science</label>
        <label><input type="checkbox" /> Creative Writing</label>
        <label><input type="checkbox" /> Nursing</label>
        <label><input type="checkbox" /> Psychology</label>
      </div>
      <div className="course-sidebar-section">
        <div className="course-sidebar-title">Duration</div>
        <label><input type="radio" name="duration" /> 1-3 months</label>
        <label><input type="radio" name="duration" /> 3-6 months</label>
        <label><input type="radio" name="duration" /> 6-12 months</label>
        <label><input type="radio" name="duration" /> 12+ months</label>
      </div>
      <div className="course-sidebar-section">
        <div className="course-sidebar-title">Start Date</div>
        <input type="date" className="course-sidebar-date" />
        <div className="course-sidebar-title" style={{marginTop: '1rem'}}>End Date</div>
        <input type="date" className="course-sidebar-date" />
      </div>
    </aside>
  );
}

export default CourseSidebar;
