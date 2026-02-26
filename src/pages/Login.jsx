import React, { useState } from 'react';

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple client-side validation for demonstration
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    onLoginSuccess();
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">Smart Attendance &amp; Productivity Analyzer</h1>
        <p className="login-subtitle">Sign in to view your organization insights</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="form-label">
            Email
            <input
              type="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
            />
          </label>
          <label className="form-label">
            Password
            <input
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </label>
          {error && <p className="form-error">{error}</p>}
          <button type="submit" className="primary-button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

