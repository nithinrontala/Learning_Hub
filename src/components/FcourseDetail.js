import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Fcoursed.css';

const featuredCourses = [
  {
    id: 1,
    title: 'Data Science Fundamentals',
    category: 'Technology',
    duration: '12 weeks',
    startDate: '2025-07-15',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    description: 'Learn the basics of data analysis, visualization, and machine learning techniques.',
    programDescription: `Data Science Fundamentals introduces you to the essential concepts of data analysis, statistics, and machine learning. You will learn to collect, clean, and visualize data, and apply foundational algorithms to real-world problems. This course is ideal for beginners looking to start a career in data science.`
  },
  {
    id: 2,
    title: 'Web Development Bootcamp',
    category: 'Technology',
    duration: '8 weeks',
    startDate: '2025-08-01',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
    description: 'Master front-end and back-end development to build dynamic web applications.',
    programDescription: `This bootcamp covers HTML, CSS, JavaScript, and back-end technologies like Node.js and databases. You will build responsive websites and full-stack applications, gaining hands-on experience with modern web development tools and frameworks. Perfect for aspiring web developers.`
  },
  {
    id: 3,
    title: 'Digital Marketing Strategy',
    category: 'Business',
    duration: '10 weeks',
    startDate: '2025-08-15',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    description: 'Develop effective digital marketing campaigns and strategies for business growth.',
    programDescription: `Learn to create, implement, and analyze digital marketing campaigns using SEO, SEM, content marketing, and analytics. This course provides practical skills for growing a business online and is suitable for marketers and entrepreneurs.`
  }
];

function getEndDate(startDate, duration) {
  const weeks = parseInt(duration);
  const start = new Date(startDate);
  const end = new Date(start);
  end.setDate(start.getDate() + weeks * 7);
  return end.toISOString().slice(0, 10);
}

function FcourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = featuredCourses.find(c => String(c.id) === String(id));
  const [wishlisted, setWishlisted] = useState(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    return wishlist.includes(Number(id));
  });
  if (!course) return <div style={{ padding: 40 }}>Course Not Found</div>;
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <div
        className="fcoursed-bg"
        style={{ backgroundImage: `url('${course.image}')` }}
      />
      <div className="fcoursed-container">
        <button
          className="fcoursed-back-btn"
          onClick={() => navigate(-1)}
          aria-label="Back to Featured Courses"
        >
          &#8592;
        </button>
        <h1 className="fcoursed-title">
          {course.title}
          <span
            className="fcoursed-wishlist"
            title={wishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
            onClick={() => {
              const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
              const isWishlisted = wishlist.includes(Number(id));
              const updatedWishlist = isWishlisted
                ? wishlist.filter(courseId => courseId !== Number(id))
                : [...wishlist, Number(id)];
              localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
              setWishlisted(!isWishlisted);
            }}
            role="button"
            aria-pressed={wishlisted}
            tabIndex={0}
            onKeyPress={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];                const isWishlisted = wishlist.includes(Number(id));
                const updatedWishlist = isWishlisted
                  ? wishlist.filter(courseId => courseId !== Number(id))
                  : [...wishlist, Number(id)];
                localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
                setWishlisted(!isWishlisted);
              }
            }}
          >
            {wishlisted ? '❤' : '♡'}
          </span>
          {/* <button
            className={`fcoursed-wishlist${wishlisted ? ' favorited' : ''}`}
            aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            onClick={() => setWishlisted(w => !w)}
            style={{ marginLeft: 12, border: 'none', background: 'none', padding: 0 }}
          >
            {wishlisted ? '♥' : '♡'}
          </button> */}
        </h1>
        <p className="fcoursed-description">{course.description}</p>
        <div className="fcoursed-details">
          <div className="fcoursed-details-row">
            <div className="fcoursed-detail-block">
              <span className="fcoursed-detail-label">Category</span>
              <span className="fcoursed-detail-value">{course.category}</span>
            </div>
            <div className="fcoursed-detail-block">
              <span className="fcoursed-detail-label">Duration</span>
              <span className="fcoursed-detail-value">{course.duration}</span>
            </div>
          </div>
          <div className="fcoursed-details-row">
            <div className="fcoursed-detail-block">
              <span className="fcoursed-detail-label">Start Date</span>
              <span className="fcoursed-detail-value">{course.startDate}</span>
            </div>
            <div className="fcoursed-detail-block">
              <span className="fcoursed-detail-label">End Date</span>
              <span className="fcoursed-detail-value">{getEndDate(course.startDate, course.duration)}</span>
            </div>
          </div>
        </div>
        <h2 className="fcoursed-section-title">Program Description</h2>
        <p className="fcoursed-section-desc">{course.programDescription}</p>
        <button className="fcoursed-apply-btn" onClick={() => navigate('/apply')}>Apply Now</button>
      </div>
    </div>
  );
}

export default FcourseDetail;
