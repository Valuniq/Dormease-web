import tokenManager from '@/utils/tokenManager';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/tokenKey';
import { useRouter } from 'next/router';

const swrWithToken = async (url: string, options: RequestInit = {}) => {
  const token = tokenManager.getToken(ACCESS_TOKEN);
  if (!token) {
    throw new Error('No access token found');
  }

  const headers = {
    ...options.headers,
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    if (response.status === 401) {
      // accessToken이 만료된 경우
      tokenManager.removeToken(ACCESS_TOKEN);
      tokenManager.removeToken(REFRESH_TOKEN);
      // next/router의 useRouter를 사용하여 /로 리디렉션
      const router = useRouter();
      router.push('/');
      alert('세션이 만료되었습니다. 다시 로그인해 주세요.');
    }
    throw new Error('Failed to fetch data');
  }

  return response.json();
};

export default swrWithToken;
