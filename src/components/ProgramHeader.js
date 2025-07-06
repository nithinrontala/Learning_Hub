// NOTE: Do not use any CSS from other files. Only use styles from ProgramHeader.css for this component, now and in the future.
import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import CourseNavbar from './CourseNavbar';
import './ProgramHeader.css';
import courses from './coursesData';

const getEndDate = (startDate, duration) => {
  const weeks = parseInt(duration);
  const start = new Date(startDate);
  const end = new Date(start);
  end.setDate(start.getDate() + weeks * 7);
  return end.toISOString().slice(0, 10);
};

const ProgramHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const [wishlisted, setWishlisted] = useState(false);
  const course = courses.find(c => String(c.id) === String(id));
  const page = location.state?.page;

  if (!course) {
    return (
      <div className="program-header-container">
        <button className="program-header-back-btn" onClick={() => navigate('/courses' + (page ? `?page=${page}` : ''))}>&#8592;</button>
        <h1>Course Not Found</h1>
        <p>The course you are looking for does not exist.</p>
      </div>
    );
  }

  const endDate = getEndDate(course.startDate, course.duration);
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <div
        className="program-header-bg"
        style={{ backgroundImage: `url('${course.image}')` }}
      />
      <CourseNavbar />
      <div className="program-header-container">
        <button
          className="program-header-back-btn"
          onClick={() => navigate('/courses' + (page ? `?page=${page}` : ''))}
          aria-label="Back to Courses"
        >
          &#8592;
        </button>
        <nav className="program-header-breadcrumb">
          {/* Breadcrumbs can be added here if needed */}
        </nav>
        <h1 className="program-header-title">
          {course.title}
          <span
            className="program-header-wishlist"
            title={wishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
            onClick={() => setWishlisted(w => !w)}
            role="button"
            aria-pressed={wishlisted}
            tabIndex={0}
            onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') setWishlisted(w => !w); }}
          >
            {wishlisted ? '❤' : '♡'}
          </span>
        </h1>
        <p className="program-header-description">
          {course.description}
        </p>
        <div className="program-header-details">
          <div className="program-header-details-row">
            <div style={{ minWidth: '180px' }}>
              <div className="program-header-detail-label">Category</div>
              <div className="program-header-detail-value">{course.category}</div>
              <div className="program-header-detail-label" style={{ marginTop: '30px' }}>Start Date</div>
              <div className="program-header-detail-value">{course.startDate}</div>
            </div>
            <div>
              <div className="program-header-detail-label">Duration</div>
              <div className="program-header-detail-value">{course.duration}</div>
              <div className="program-header-detail-label" style={{ marginTop: '30px' }}>End Date</div>
              <div className="program-header-detail-value">{endDate}</div>
            </div>
          </div>
        </div>
        <h2 className="program-header-section-title">Program Description</h2>
        <p className="program-header-section-desc">{course.programDescription}</p>
        <button className="program-header-apply-btn">Apply Now</button>
      </div>
    </div>
  );
};

export default ProgramHeader;
