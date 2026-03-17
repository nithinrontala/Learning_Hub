import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import './Dashboard.css';

function Dashboard() {
  const { user } = useAuth();
  const [selectedTab, setSelectedTab] = useState('profile');
  const [allStudents, setAllStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch all students if user is faculty
  useEffect(() => {
    if (user?.role === 'faculty' && selectedTab === 'students') {
      fetchAllStudents();
    }
  }, [selectedTab, user?.role]);

  const fetchAllStudents = async () => {
    setLoading(true);
    setError('');
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/users/students', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch students');
      }

      const data = await response.json();
      setAllStudents(data.students);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching students:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome, {user?.fullName || user?.email}</p>
      </div>

      <div className="dashboard-tabs">
        <button
          className={`tab-btn ${selectedTab === 'profile' ? 'active' : ''}`}
          onClick={() => setSelectedTab('profile')}
        >
          👤 My Profile
        </button>
        {user?.role === 'faculty' && (
          <button
            className={`tab-btn ${selectedTab === 'students' ? 'active' : ''}`}
            onClick={() => setSelectedTab('students')}
          >
            👥 All Students
          </button>
        )}
      </div>

      <div className="dashboard-content">
        {/* Profile Tab */}
        {selectedTab === 'profile' && (
          <div className="profile-section">
            <div className="profile-card">
              <div className="profile-avatar">
                {user?.profilePicture ? (
                  <img src={user.profilePicture} alt={user.fullName} />
                ) : (
                  <div className="avatar-placeholder">👤</div>
                )}
              </div>
              
              <div className="profile-info">
                <h2>{user?.fullName}</h2>
                <p className="email">{user?.email}</p>
                
                <div className="info-grid">
                  <div className="info-item">
                    <label>Role</label>
                    <span className={`role-badge role-${user?.role}`}>
                      {user?.role === 'student' ? '📚 Student' : '👨‍🏫 Faculty'}
                    </span>
                  </div>
                  
                  <div className="info-item">
                    <label>Member Since</label>
                    <span>{new Date(user?.createdAt).toLocaleDateString()}</span>
                  </div>
                  
                  {user?.role === 'student' && (
                    <>
                      <div className="info-item">
                        <label>Enrolled Courses</label>
                        <span>{user?.enrolledCourses?.length || 0}</span>
                      </div>
                      
                      <div className="info-item">
                        <label>Wishlist</label>
                        <span>{user?.wishlist?.length || 0}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Students Tab (Faculty Only) */}
        {selectedTab === 'students' && user?.role === 'faculty' && (
          <div className="students-section">
            <h2>Registered Students</h2>
            
            {error && <div className="error-message">{error}</div>}
            
            {loading ? (
              <div className="loading">Loading students...</div>
            ) : allStudents.length === 0 ? (
              <div className="no-data">No students registered yet.</div>
            ) : (
              <div className="students-table">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Enrolled Courses</th>
                      <th>Joined</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allStudents.map(student => (
                      <tr key={student._id}>
                        <td>
                          <div className="student-name">
                            {student.profilePicture ? (
                              <img src={student.profilePicture} alt={student.fullName} className="student-avatar" />
                            ) : (
                              <span className="student-avatar-text">👤</span>
                            )}
                            {student.fullName}
                          </div>
                        </td>
                        <td>{student.email}</td>
                        <td>{student.enrolledCourses?.length || 0}</td>
                        <td>{new Date(student.createdAt).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
