// NOTE: Do not use any CSS from other files. Only use styles from ProgramHeader.css for this component, now and in the future.
import React from 'react';
import CourseNavbar from './CourseNavbar';
import './ProgramHeader.css';

const mlCourse = {
  title: 'Machine Learning Basics',
  description: 'Start your journey into machine learning with foundational concepts and hands-on projects.',
  duration: '5 weeks',
  startDate: '2025-07-15',
  category: 'Technology',
  programDescription: `Gain a solid foundation in machine learning by exploring key concepts such as supervised and unsupervised learning, model evaluation, and feature engineering. This program emphasizes practical skills through hands-on projects, enabling you to build, train, and deploy basic machine learning models using real-world datasets. This course also introduces you to the core principles of machine learning, including data preprocessing, algorithm selection, and performance metrics. You’ll work with popular tools and libraries, and develop the ability to solve classification and regression problems, preparing you for more advanced studies in AI.`
};

const ProgramHeader = () => {
  return (
    <div>
      <CourseNavbar />
      <div className="program-header-container">
        <nav className="program-header-breadcrumb">
          {/* <span className="program-header-link">Programs</span> */}
          {/* <span className="program-header-separator">/</span> */}
          {/* <span className="program-header-category">Machine Learning</span> */}
        </nav>
        <h1 className="program-header-title">{mlCourse.title}</h1>
        <p className="program-header-description">
          {mlCourse.description}
        </p>
        <div className="program-header-details">
          <div className="program-header-details-row">
            <div style={{ minWidth: '180px' }}>
              <div className="program-header-detail-label">Category</div>
              <div className="program-header-detail-value">{mlCourse.category}</div>
              <div className="program-header-details-startdate" style={{ marginTop: '30px' }}>
                <div className="program-header-detail-label">Start Date</div>
                <div className="program-header-detail-value">{mlCourse.startDate}</div>
              </div>
            </div>
            <div>
              <div className="program-header-detail-label">Duration</div>
              <div className="program-header-detail-value">{mlCourse.duration}</div>
            </div>
          </div>
        </div>
        <h2 className="program-header-section-title">Program Description</h2>
        <p className="program-header-section-desc">{mlCourse.programDescription}</p>
        <button className="program-header-apply-btn">Apply Now</button>
      </div>
    </div>
  );
};

export default ProgramHeader;
