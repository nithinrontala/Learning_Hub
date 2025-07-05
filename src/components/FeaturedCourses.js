import React from 'react';
import './FeaturedCourses.css';

const courses = [
  {
    title: 'Data Science Fundamentals',
    duration: '12 weeks',
    description: 'Learn the basics of data analysis, visualization, and machine learning techniques.',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Web Development Bootcamp',
    duration: '8 weeks',
    description: 'Master front-end and back-end development to build dynamic web applications.',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Digital Marketing Strategy',
    duration: '10 weeks',
    description: 'Develop effective digital marketing campaigns and strategies for business growth.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
  }
];

function FeaturedCourses() {
  return (
    <section className="featured-courses-section">
      <h2>Featured Courses</h2>
      <div className="courses-list">
        {courses.map((course, idx) => (
          <div className="course-card" key={idx}>
            <div className="course-info">
              <div className="course-duration">Duration: {course.duration}</div>
              <div className="course-title">{course.title}</div>
              <div className="course-description">{course.description}</div>
            </div>
            <div className="course-image">
              <img src={course.image} alt={course.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedCourses;
