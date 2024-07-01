// src/utils/swrWithToken.ts
import tokenManager from '@/utils/tokenManager';
import { ACCESS_TOKEN } from '@/constants/tokenKey';

const swrWithToken = async (url: string, options: RequestInit = {}) => {
  const token = tokenManager.getToken(ACCESS_TOKEN);
  if (!token) {
    throw new Error('No access token found');
  }

  const headers = {
    ...options.headers,
    Authorization: `bearer ${token}`,
    'Content-Type': 'application/json',
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};

export default swrWithToken;
