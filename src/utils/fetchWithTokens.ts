import tokenManager from '@/utils/tokenManager';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/tokenKey';
import { reissueToken } from '@/apis/auth';

const fetchWithTokens = async (url: string, options: RequestInit = {}) => {
  const accessToken = tokenManager.getToken(ACCESS_TOKEN);
  const refreshToken = tokenManager.getToken(REFRESH_TOKEN);

  if (!accessToken) {
    throw new Error('No access token found');
  }

  const headers = {
    ...options.headers,
    Authorization: `Bearer ${accessToken}`,
  };

  let response = await fetch(url, {
    ...options,
    headers,
  });

  if (response.status === 401 && refreshToken) {
    // Access Token이 만료되었고 Refresh Token이 있을 경우 토큰 갱신
    const newAccessToken = await reissueToken(refreshToken); // 기존의 reissueToken 함수 재사용

    if (newAccessToken) {
      // 새로운 액세스 토큰이 발급되면, 토큰을 저장하고 기존 요청 재시도
      tokenManager.saveToken(ACCESS_TOKEN, newAccessToken);

      const retryHeaders = {
        ...headers,
        Authorization: `Bearer ${newAccessToken}`,
      };

      response = await fetch(url, {
        ...options,
        headers: retryHeaders,
      });
    } else {
      // 리프레시 토큰도 만료된 경우 로그아웃 처리
      handleSessionExpiration();
    }
  } else if (response.status === 401) {
    // 리프레시 토큰이 없는 경우 세션 만료 처리
    handleSessionExpiration();
  }

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  if (response.status === 204 || response.status === 201) {
    return {}; // 204 No Content인 경우 빈 객체 반환
  }

  return response.json();
};

// 세션 만료 시 로그아웃 처리 함수
const handleSessionExpiration = () => {
  tokenManager.removeToken(ACCESS_TOKEN);
  tokenManager.removeToken(REFRESH_TOKEN);

  if (typeof window !== 'undefined') {
    alert('세션이 만료되었습니다. 다시 로그인해 주세요.');
    window.location.href = '/'; // '/'로 리디렉션
  }
};

export default fetchWithTokens;
