// NOTE: Do not use any CSS from other files. Only use styles from CourseCard.css for this component, now and in the future.
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CourseCard.css';

function CourseCard({ course }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (course.title === 'Machine Learning Basics') {
      navigate('/program-header');
    }
  };

  return (
    <div className="course-card" onClick={handleClick} style={{ cursor: course.title === 'Machine Learning Basics' ? 'pointer' : 'default' }}>
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
