import React from 'react';
import './CourseCard.css';

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} className="course-card-image" />
      <div className="course-card-content">
        <h3 className="course-card-title">{course.title}</h3>
        <p className="course-card-desc">{course.description}</p>
        <div className="course-card-meta">
          <span className="course-card-duration">{course.duration}</span>
          <span className="course-card-date">Start: {course.startDate}</span>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
