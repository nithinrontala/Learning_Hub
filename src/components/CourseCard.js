// NOTE: Do not use any CSS from other files. Only use styles from CourseCard.css for this component, now and in the future.
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CourseCard.css';

function getEndDate(startDate, duration) {
  const weeks = parseInt(duration);
  const start = new Date(startDate);
  const end = new Date(start);
  end.setDate(start.getDate() + weeks * 7);
  return end.toISOString().slice(0, 10);
}

function CourseCard({ course }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/program/${course.id}`);
  };

  const endDate = getEndDate(course.startDate, course.duration);

  return (
    <div className="course-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img src={course.image} alt={course.title} className="course-card-image" />
      <div className="course-card-content">
        <h3 className="course-card-title">{course.title}</h3>
        <p className="course-card-desc">{course.description}</p>
        <div className="course-card-meta">
          <span className="course-card-duration">{course.duration}</span>
          <span className="course-card-date">Start: {course.startDate}</span>
        </div>
        <div className="course-card-enddate">End: {endDate}</div>
      </div>
    </div>
  );
}

export default CourseCard;
