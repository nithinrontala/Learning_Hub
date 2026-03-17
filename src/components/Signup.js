import React, { useState } from 'react';
import './Auth.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [localError, setLocalError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signup, error: authError } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLocalError('');

    // Validation
    if (!name || !email || !password || !confirmPassword) {
      setLocalError('Please fill in all fields');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setLocalError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setLocalError('Passwords do not match');
      setLoading(false);
      return;
    }

    const result = await signup(name, email, password);
    setLoading(false);

    if (result.success) {
      navigate('/');
    } else {
      setLocalError(result.error);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form wide" onSubmit={handleSubmit}>
        <h2 className="auth-title">Create your account</h2>
        
        {(localError || authError) && <div style={{color: 'red', marginBottom: '10px', fontSize: '14px'}}>{localError || authError}</div>}
        
        <label>Full Name</label>
        <input 
          type="text" 
          placeholder="Enter your full name" 
          value={name} 
          onChange={e => setName(e.target.value)} 
          required 
          disabled={loading}
        />
        
        <label>Email</label>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          required 
          disabled={loading}
        />
        
        <label>Password</label>
        <input 
          type="password" 
          placeholder="Enter your password (minimum 6 characters)" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          required 
          disabled={loading}
        />
        
        <label>Confirm Password</label>
        <input 
          type="password" 
          placeholder="Confirm your password" 
          value={confirmPassword} 
          onChange={e => setConfirmPassword(e.target.value)} 
          required 
          disabled={loading}
        />
        
        <button type="submit" className="auth-btn wide" disabled={loading}>
          {loading ? 'Creating Account...' : 'Create Account'}
        </button>
        
        <div className="auth-switch">
          Already have an account? <a href="/login">Log in</a>
        </div>
      </form>
    </div>
  );
}

export default Signup;
