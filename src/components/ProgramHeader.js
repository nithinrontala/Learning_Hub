// NOTE: Do not use any CSS from other files. Only use styles from ProgramHeader.css for this component, now and in the future.
import React from 'react';
import CourseNavbar from './CourseNavbar';
import './ProgramHeader.css';

const ProgramHeader = () => {
  return (
    <div>
      <CourseNavbar />
      <div className="program-header-container">
        <nav className="program-header-breadcrumb">
          <span className="program-header-link">Programs</span>
          <span className="program-header-separator">/</span>
          <span className="program-header-category">Marketing</span>
        </nav>
        <h1 className="program-header-title">Digital Marketing Fundamentals</h1>
        <p className="program-header-description">
          Learn to analyze data and make strategic business decisions. This program covers data visualization, statistical modeling, and business intelligence tools.
        </p>
        <div className="program-header-details">
          <div>
            <div className="program-header-detail-label">Category</div>
            <div className="program-header-detail-value">Business</div>
          </div>
          <div>
            <div className="program-header-detail-label">Duration</div>
            <div className="program-header-detail-value">12 weeks</div>
          </div>
          <div>
            <div className="program-header-detail-label">Start Date</div>
            <div className="program-header-detail-value">September 15, 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramHeader;
