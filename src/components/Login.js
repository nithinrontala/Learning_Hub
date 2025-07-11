import React, { useState } from 'react';
import './Auth.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    navigate('/');
  };

  return (
    <div className="auth-container">
      <form className="auth-form wide" onSubmit={handleSubmit}>
        <h2 className="auth-title">Welcome back</h2>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <div className="auth-row">
          <span className="forgot-link" style={{color:'#7b8794', cursor:'pointer'}}>Forgot Password?</span>
        </div>
        <button type="submit" className="auth-btn wide">Login</button>
        <div className="auth-switch">
          Don't have an account? <a href="/signup">Sign Up</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
