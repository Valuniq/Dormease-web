// src/utils/fetchWithToken.ts
import tokenManager from '@/utils/tokenManager';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/tokenKey';

const fetchWithToken = async (url: string, options: RequestInit = {}) => {
  const accessToken = tokenManager.getToken(ACCESS_TOKEN);
  if (!accessToken) {
    throw new Error('No access token found');
  }

  const headers = {
    ...options.headers,
    Authorization: `Bearer ${accessToken}`,
  };

  console.log('Request Headers:', headers); // Add this line for debugging

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (response.status === 401) {
    const refreshToken = tokenManager.getToken(REFRESH_TOKEN);
    if (refreshToken) {
      const newAccessToken = await refreshAccessToken(refreshToken);
      if (newAccessToken) {
        tokenManager.saveToken(ACCESS_TOKEN, newAccessToken);
        headers.Authorization = `Bearer ${newAccessToken}`;
        const retryResponse = await fetch(url, {
          ...options,
          headers,
        });
        return retryResponse;
      }
    }
  }

  return response;
};

const refreshAccessToken = async (refreshToken: string) => {
  const response = await fetch('http://13.209.177.109:8080/api/v1/auth/refresh-token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refreshToken }),
  });

  if (response.ok) {
    const data = await response.json();
    return data.accessToken;
  } else {
    return null;
  }
};

export default fetchWithToken;
