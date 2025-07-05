import React, { useState } from 'react';
import CourseCard from './CourseCard';
import CoursePagination from './CoursePagination';
import './CourseList.css';
import courses from './coursesData';

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
