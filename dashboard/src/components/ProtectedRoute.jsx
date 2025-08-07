import React, { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import SessionManager from "../utils/sessionManager";

const ProtectedRoute = ({ children }) => {
  const [isValidating, setIsValidating] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const validateToken = async () => {
      try {
        // First, check if there's a valid session
        if (SessionManager.isSessionValid()) {
          // Check if session needs refresh
          if (SessionManager.needsRefresh()) {
            const refreshSuccess = await SessionManager.refreshSession();
            if (!refreshSuccess) {
              setIsValidating(false);
              setIsAuthenticated(false);
              return;
            }
          }

          // Validate token with backend
          const session = SessionManager.getSession();
          const response = await fetch('http://localhost:3002/validate-token', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: session.token }),
          });

          const data = await response.json();

          if (data.valid) {
            setIsAuthenticated(true);
          } else {
            // Clear invalid session
            SessionManager.clearSession();
            setIsAuthenticated(false);
          }
        } else {
          // No valid session, check URL parameters
          const urlParams = new URLSearchParams(location.search);
          const signupToken = urlParams.get('token');
          
          if (signupToken === 'signup') {
            // User came from signup page, redirect to signup
            setIsValidating(false);
            setIsAuthenticated(false);
            return;
          }
          
          // No valid session and no signup parameter
          setIsValidating(false);
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Token validation error:', error);
        SessionManager.clearSession();
        setIsAuthenticated(false);
      } finally {
        setIsValidating(false);
      }
    };

    validateToken();
  }, [location]);

  // Set up periodic session refresh (every 30 minutes)
  useEffect(() => {
    const interval = setInterval(async () => {
      if (SessionManager.isSessionValid() && SessionManager.needsRefresh()) {
        await SessionManager.refreshSession();
      }
    }, 30 * 60 * 1000); // 30 minutes

    return () => clearInterval(interval);
  }, []);

  if (isValidating) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/signup" replace />;
  }

  return children;
};

export default ProtectedRoute;
