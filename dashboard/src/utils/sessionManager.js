// Session Management Utility
class SessionManager {
  static TOKEN_KEY = 'token';
  static TOKEN_EXPIRY_KEY = 'tokenExpiry';
  static USER_INFO_KEY = 'userInfo';

  // Store session data
  static setSession(token, userInfo) {
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.USER_INFO_KEY, JSON.stringify(userInfo));
    
    // Set expiry for 12 hours
    const expiryTime = new Date().getTime() + (12 * 60 * 60 * 1000);
    localStorage.setItem(this.TOKEN_EXPIRY_KEY, expiryTime.toString());
  }

  // Get current session
  static getSession() {
    const token = localStorage.getItem(this.TOKEN_KEY);
    const tokenExpiry = localStorage.getItem(this.TOKEN_EXPIRY_KEY);
    const userInfo = localStorage.getItem(this.USER_INFO_KEY);

    if (!token || !tokenExpiry) {
      return null;
    }

    // Check if token has expired
    const currentTime = new Date().getTime();
    const expiryTime = parseInt(tokenExpiry);

    if (currentTime > expiryTime) {
      this.clearSession();
      return null;
    }

    return {
      token,
      userInfo: userInfo ? JSON.parse(userInfo) : null,
      expiryTime
    };
  }

  // Check if session is valid
  static isSessionValid() {
    const session = this.getSession();
    return session !== null;
  }

  // Clear session
  static clearSession() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.TOKEN_EXPIRY_KEY);
    localStorage.removeItem(this.USER_INFO_KEY);
  }

  // Refresh session
  static async refreshSession() {
    const session = this.getSession();
    if (!session) {
      return false;
    }

    try {
      const response = await fetch('http://localhost:3002/refresh-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: session.token }),
      });

      const data = await response.json();

      if (data.valid) {
        this.setSession(data.token, data.user);
        return true;
      } else {
        this.clearSession();
        return false;
      }
    } catch (error) {
      console.error('Session refresh error:', error);
      this.clearSession();
      return false;
    }
  }

  // Check if session needs refresh (within 1 hour of expiry)
  static needsRefresh() {
    const session = this.getSession();
    if (!session) {
      return false;
    }

    const currentTime = new Date().getTime();
    const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds
    
    return (session.expiryTime - currentTime) < oneHour;
  }
}

export default SessionManager;
