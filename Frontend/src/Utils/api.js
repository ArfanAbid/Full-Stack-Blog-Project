// utils/api.js

import refreshToken from './refreshToken';

const api = async (url, options = {}) => {
 options.headers = {
    ...options.headers,
    'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
 };

 const response = await fetch(url, options);

 if (response.status === 401) {
    try {
      const newToken = await refreshToken();
      options.headers['Authorization'] = `Bearer ${newToken}`;
      return api(url, options); // Retry the request with the new token
    } catch (error) {
      console.error('Failed to refresh token:', error);
      // Redirect to login if refresh token also expires
      window.location.href = '/login';
      throw error;
    }
 }

 if (!response.ok) {
    throw new Error('Network response was not ok');
 }

 return response.json();
};

export default api;
