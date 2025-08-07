// frontend/src/landing_page/login/Login.js

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Keep Link for navigation within frontend
import './Login.css'; // Your styling for the login page

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous error messages

    try {
      // 1. Send user credentials to your backend's login endpoint
      // Assuming your backend is running on http://localhost:3002
      const response = await axios.post(
        'http://localhost:3002/login', 
        { email, password }
      );

      // 2. Check if login was successful based on backend response
      if (response.data.success) {
        console.log('Login successful! Redirecting to dashboard...');
        
        // 3. Store the authentication token received from the backend in localStorage.
        // The dashboard app will read this token.
        localStorage.setItem('authToken', response.data.token);

        // 4. Perform a full-page redirect to the dashboard application's URL.
        // Assuming your dashboard app is running on http://localhost:3001
        window.location.href = 'http://localhost:3001'; 
      } else {
        // If backend indicates failure, display the message
        setError(response.data.message || 'Login failed. Please check your credentials.');
      }
    } catch (err) {
      // 5. Handle any errors during the API call (e.g., network issues, server errors)
      if (err.response) {
        setError(err.response.data.message || 'An error occurred during login.');
      } else if (err.request) {
        setError('No response from server. Please check your backend is running.');
      } else {
        setError('An unexpected error occurred.');
      }
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login to Your Account</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Log In</button>
        <p className="signup-link-container">
          Don't have an account? <Link to="/signup" className="signup-link">Sign Up here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;