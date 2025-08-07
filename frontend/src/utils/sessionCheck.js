// Session Check Utility for Frontend
class SessionCheck {
  static async checkValidSession() {
    try {
      const token = localStorage.getItem('token');
      const tokenExpiry = localStorage.getItem('tokenExpiry');
      
      if (!token || !tokenExpiry) {
        return false;
      }

      // Check if token has expired
      const currentTime = new Date().getTime();
      const expiryTime = parseInt(tokenExpiry);
      
      if (currentTime > expiryTime) {
        // Token expired, clear it
        localStorage.removeItem('token');
        localStorage.removeItem('tokenExpiry');
        localStorage.removeItem('userInfo');
        return false;
      }

      // Validate token with backend
      const response = await fetch('http://localhost:3002/validate-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();
      
      if (data.valid) {
        return true;
      } else {
        // Invalid token, clear it
        localStorage.removeItem('token');
        localStorage.removeItem('tokenExpiry');
        localStorage.removeItem('userInfo');
        return false;
      }
    } catch (error) {
      console.error('Session check error:', error);
      return false;
    }
  }

  static clearSession() {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiry');
    localStorage.removeItem('userInfo');
  }
}

export default SessionCheck;
