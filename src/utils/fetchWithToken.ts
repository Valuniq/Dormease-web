import { BASE_URL } from '@/constants/path';
import tokenManager from '@/utils/tokenManager';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/tokenKey';
import { useRouter } from 'next/router';

const FetchWithToken = async (url: string, options: RequestInit = {}) => {
  const router = useRouter(); // next/router의 useRouter를 사용하여 리디렉션 처리

  const accessToken = tokenManager.getToken(ACCESS_TOKEN);
  if (!accessToken) {
    router.push('/');
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

        if (retryResponse.status === 401) {
          // 새로운 액세스 토큰도 만료된 경우
          tokenManager.removeToken(ACCESS_TOKEN);
          tokenManager.removeToken(REFRESH_TOKEN);
          router.push('/');
          alert('세션이 만료되었습니다. 다시 로그인해 주세요.');
        }

        return retryResponse;
      }
    }
    // 리프레시 토큰도 만료된 경우
    tokenManager.removeToken(ACCESS_TOKEN);
    tokenManager.removeToken(REFRESH_TOKEN);
    router.push('/');
    alert('세션이 만료되었습니다. 다시 로그인해 주세요.');
    throw new Error('Refresh token expired');
  }

  return response;
};

const refreshAccessToken = async (refreshToken: string) => {
  const response = await fetch(`${BASE_URL}/api/v1/auth/refresh-token`, {
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

export default FetchWithToken;
