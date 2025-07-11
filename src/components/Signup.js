import React, { useState } from 'react';
import './Auth.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <form className="auth-form wide" onSubmit={handleSubmit}>
        <h2 className="auth-title">Create your account</h2>
        <label>Full Name</label>
        <input type="text" placeholder="Enter  your full name" value={name} onChange={e => setName(e.target.value)} required />
        <label>Email</label>
        <input type="email" placeholder="Enter  your email" value={email} onChange={e => setEmail(e.target.value)} required />
        <label>Password</label>
        <input type="password" placeholder="Enter  your password" value={password} onChange={e => setPassword(e.target.value)} required />
        <label>Confirm Password</label>
        <input type="password" placeholder="Confirm  your password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
        <button type="submit" className="auth-btn wide">Create Account</button>
        <div className="auth-switch">
          Already have an account? <a href="/login">Log in</a>
        </div>
      </form>
    </div>
  );
}

export default Signup;
