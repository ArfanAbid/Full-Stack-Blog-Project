// utils/refreshToken.js

const refreshToken = async () => {
  try {
     const response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         refresh: localStorage.getItem('refresh_token'),
       }),
     });
 
     if (!response.ok) {
       throw new Error('Failed to refresh token');
     }
 
     const data = await response.json();
     localStorage.setItem('access_token', data.access);
     return data.access;
  } catch (error) {
     console.error('Error refreshing token:', error);
     // Redirect to login if refresh token also expires
     window.location.href = '/login';
     throw error;
  }
 };
 
 export default refreshToken;
 