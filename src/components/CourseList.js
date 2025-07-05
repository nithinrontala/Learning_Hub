import React, { useState } from 'react';
import CourseCard from './CourseCard';
import CoursePagination from './CoursePagination';
import './CourseList.css';

// Updated course data
const courses = [
  {
    id: 1,
    title: 'Machine Learning Basics',
    description: 'Start your journey into machine learning with foundational concepts and hands-on projects.',
    duration: '5 weeks',
    startDate: '2025-07-15',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    title: 'Artificial Intelligence Essentials',
    description: 'Understand the core ideas behind AI and its real-world applications.',
    duration: '6 weeks',
    startDate: '2025-08-01',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    title: 'Digital Marketing Strategies',
    description: 'Master digital marketing, SEO, and social media campaigns for business growth.',
    duration: '4 weeks',
    startDate: '2025-08-20',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    title: 'Data Analytics with Python',
    description: 'Analyze and visualize data using Python and industry-standard tools.',
    duration: '5 weeks',
    startDate: '2025-09-05',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 5,
    title: 'Business Intelligence Fundamentals',
    description: 'Learn BI concepts, dashboards, and reporting for smarter business decisions.',
    duration: '3 weeks',
    startDate: '2025-09-20',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 6,
    title: 'Content Marketing Mastery',
    description: 'Create compelling content and build your brand online.',
    duration: '4 weeks',
    startDate: '2025-10-01',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 7,
    title: 'Cloud Computing Foundations',
    description: 'Learn the basics of cloud platforms, deployment, and services.',
    duration: '5 weeks',
    startDate: '2025-10-10',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 8,
    title: 'UI/UX Design Principles',
    description: 'Design user-friendly interfaces and experiences for web and mobile.',
    duration: '4 weeks',
    startDate: '2025-10-20',
    image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 9,
    title: 'Project Management Professional',
    description: 'Master project management skills and methodologies.',
    duration: '6 weeks',
    startDate: '2025-11-01',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 10,
    title: 'Cybersecurity Essentials',
    description: 'Understand the fundamentals of cybersecurity and protection.',
    duration: '5 weeks',
    startDate: '2025-11-10',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 11,
    title: 'Financial Analysis & Modeling',
    description: 'Analyze financial data and build robust financial models.',
    duration: '4 weeks',
    startDate: '2025-11-20',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 12,
    title: 'Entrepreneurship & Innovation',
    description: 'Develop entrepreneurial skills and learn to innovate in business.',
    duration: '6 weeks',
    startDate: '2025-12-01',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
  },
];

function CourseList() {
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;
  const totalPages = Math.ceil(courses.length / coursesPerPage);
  const startIdx = (currentPage - 1) * coursesPerPage;
  const endIdx = startIdx + coursesPerPage;
  const currentCourses = courses.slice(startIdx, endIdx);

  return (
    <>
      <div className="course-list">
        {currentCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <CoursePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
}

export default CourseList;
