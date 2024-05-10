import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/tokenKey';
import cookie from 'react-cookies';

const saveToken = (key: 'ACCESS_TOKEN' | 'REFRESH_TOKEN', token: string) => {
  const expires = new Date();
  expires.setDate(expires.getDate() + 14);

  // 쿠키에 토큰 저장
  cookie.save(key, token, {
    path: '/',
    // 리프레시 토큰에 만료 날짜 설정
    expires: key === 'REFRESH_TOKEN' ? expires : undefined,
  });
};

interface AuthorizedFetchResponse {
  isAuth: boolean;
  data: any | null;
}

// 인증이 필요한 API 요청을 위한 함수
const authorizedFetch: ({
  accessToken,
  refreshToken,
  apiURL,
}: {
  accessToken: string;
  refreshToken: string;
  apiURL: string;
}) => Promise<AuthorizedFetchResponse> = async ({ accessToken, refreshToken, apiURL }) => {
  // 액세스 토큰이 있을 경우 헤더에 추가
  const headers = {
    'Content-Type': 'application/json',
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
  };

  try {
    const response = await fetch(apiURL, {
      method: 'GET',
      headers,
    });

    if (response.ok) {
      const data = await response.json();
      return { isAuth: true, data };
    } else if (response.status === 401) {
      // 액세스 토큰이 만료되었을 경우
      const refreshResponse = await fetch('/path/to/refresh/token/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${refreshToken}`,
        },
      });

      if (refreshResponse.ok) {
        const refreshData = await refreshResponse.json();
        const newAccessToken = refreshData.accessToken; // 새로운 액세스 토큰

        // 새로운 액세스 토큰 저장
        saveToken('ACCESS_TOKEN', newAccessToken);

        // 새로운 액세스 토큰으로 원래의 API 요청 재시도
        return await authorizedFetch({
          accessToken: newAccessToken,
          refreshToken,
          apiURL,
        });
      } else {
        // 리프레시 토큰도 만료된 경우
        removeTokenAll();
        return { isAuth: false, data: null };
      }
    } else {
      // 다른 오류 처리
      return { isAuth: false, data: null };
    }
  } catch (error) {
    console.error('API 요청 중 오류 발생:', error);
    return { isAuth: false, data: null };
  }
};

const removeToken = (key: 'ACCESS_TOKEN' | 'REFRESH_TOKEN') => {
  cookie.remove(key, { path: '/' });
};

const removeTokenAll = () => {
  removeToken(ACCESS_TOKEN);
  removeToken(REFRESH_TOKEN);
};

const getAccessToken = () => {
  return cookie.load(ACCESS_TOKEN);
};

const getRefreshToken = () => {
  return cookie.load(REFRESH_TOKEN);
};

export default { saveToken, removeToken, removeTokenAll, getAccessToken, getRefreshToken };
