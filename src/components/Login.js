import React, { useState } from 'react';
import './Auth.css';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [localError, setLocalError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login, googleLogin, error: authError } = useAuth();

  // Get Google Client ID from environment variable
  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLocalError('');

    if (!email || !password) {
      setLocalError('Please fill in all fields');
      setLoading(false);
      return;
    }

    const result = await login(email, password);
    setLoading(false);
    
    if (result.success) {
      navigate('/');
    } else {
      setLocalError(result.error);
    }
  };

  // Handle Google OAuth success
  const handleGoogleSuccess = async (credentialResponse) => {
    setLoading(true);
    setLocalError('');
    
    try {
      const result = await googleLogin(credentialResponse.credential);
      
      if (result.success) {
        navigate('/');
      } else {
        setLocalError(result.error);
      }
    } catch (err) {
      setLocalError('Failed to authenticate with Google');
      console.error('Google OAuth Error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Handle Google OAuth error
  const handleGoogleError = () => {
    setLocalError('Failed to authenticate with Google');
    console.error('Google OAuth Error occurred');
  };

  return (
    <GoogleOAuthProvider clientId={googleClientId || ''}>
      <div className="auth-container">
        <form className="auth-form wide" onSubmit={handleSubmit}>
          <h2 className="auth-title">Welcome back</h2>
          
          {(localError || authError) && <div style={{color: 'red', marginBottom: '10px', fontSize: '14px'}}>{localError || authError}</div>}
          
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required 
            disabled={loading}
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            required 
            disabled={loading}
          />
          
          <div className="auth-row">
            <span className="forgot-link" style={{color:'#7b8794', cursor:'pointer'}}>Forgot Password?</span>
          </div>
          
          <button type="submit" className="auth-btn wide" disabled={loading}>
            {loading ? 'Logging In...' : 'Login'}
          </button>
          
          {/* Divider */}
          <div style={{margin: '20px 0', textAlign: 'center', color: '#7b8794'}}>
            OR
          </div>
          
          {/* Google OAuth Button */}
          <div style={{display: 'flex', justifyContent: 'center', marginBottom: '15px'}}>
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              useOneTap
            />
          </div>
          
          <div className="auth-switch">
            Don't have an account? <a href="/signup">Sign Up</a>
          </div>
        </form>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Login;
