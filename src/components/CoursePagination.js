import React from 'react';
import './CoursePagination.css';

function CoursePagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="course-pagination">
      <button
        className="course-pagination-btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <button
        className="course-pagination-btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default CoursePagination;
