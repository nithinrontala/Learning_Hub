import React from 'react';
import { useNavigate } from 'react-router-dom';

// Generate a unique reference number based on timestamp and a random number
function generateReferenceNumber() {
  const year = new Date().getFullYear();
  const random = Math.floor(10000 + Math.random() * 90000);
  return `REF#${year}-${random}`;
}

function ApplicationSubmitted() {
  const navigate = useNavigate();
  // Store the ref number in sessionStorage so it persists for this session
  let referenceNumber = sessionStorage.getItem('applicationRef');
  if (!referenceNumber) {
    referenceNumber = generateReferenceNumber();
    sessionStorage.setItem('applicationRef', referenceNumber);
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <div style={{ width: '100%', maxWidth: 600, textAlign: 'center', margin: '0 auto' }}>
        <div style={{ fontSize: 32, marginBottom: 12 }}>
          <span role="img" aria-label="celebration">🎉</span>
        </div>
        <h1 style={{ fontWeight: 700, fontSize: 28, marginBottom: 8 }}>Your application has been submitted!</h1>
        <div style={{ color: '#444', fontSize: 16, marginBottom: 8 }}>
          Your reference number is <span style={{ fontWeight: 600 }}>{referenceNumber}</span>
        </div>
        <div style={{ color: '#444', fontSize: 15, marginBottom: 32 }}>
          We've sent a confirmation email to your inbox. Please check your email for further instructions.
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
          <button
            onClick={() => navigate('/courses')}
            style={{ background: '#f5f7fa', color: '#222', border: 'none', borderRadius: 8, padding: '12px 28px', fontWeight: 600, fontSize: 16, cursor: 'pointer', transition: 'background 0.2s' }}
          >
            Back to Courses
          </button>
          <button
            onClick={() => navigate('/my-applications')}
            style={{ background: '#e6f0fa', color: '#222', border: 'none', borderRadius: 8, padding: '12px 28px', fontWeight: 600, fontSize: 16, cursor: 'pointer', transition: 'background 0.2s' }}
          >
            View My Applications
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApplicationSubmitted;
