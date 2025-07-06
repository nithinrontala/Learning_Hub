import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CourseCard from './CourseCard';
import CoursePagination from './CoursePagination';
import './CourseList.css';
import courses from './coursesData';

function CourseList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = parseInt(searchParams.get('page')) || 1;
  const [currentPage, setCurrentPage] = useState(pageParam);
  const coursesPerPage = 6;
  const totalPages = Math.ceil(courses.length / coursesPerPage);
  const startIdx = (currentPage - 1) * coursesPerPage;
  const endIdx = startIdx + coursesPerPage;
  const currentCourses = courses.slice(startIdx, endIdx);

  useEffect(() => {
    setSearchParams({ page: currentPage });
  }, [currentPage, setSearchParams]);

  return (
    <>
      <div className="course-list">
        {currentCourses.map(course => (
          <CourseCard key={course.id} course={course} currentPage={currentPage} />
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
