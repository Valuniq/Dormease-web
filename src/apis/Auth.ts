import { BASE_URL } from '@/constants/path';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/tokenKey';
import tokenManager from '@/utils/tokenManager';

interface UserLoginRequest {
  loginId: string;
  password: string;
}

interface UserLoginResponse {
  check: boolean;
  information: {
    accessToken: string;
    refreshToken: string;
    userType: string;
  };
}

export const signIn = async ({ loginId, password }: UserLoginRequest): Promise<UserLoginResponse> => {
  const res = await fetch(`${BASE_URL}/api/v1/auth/sign-in`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ loginId, password }),
  });

  if (!res.ok) {
    throw new Error('Failed');
  }

  const response: UserLoginResponse = await res.json();
  tokenManager.saveToken(ACCESS_TOKEN, response.information.accessToken);
  tokenManager.saveToken(REFRESH_TOKEN, response.information.refreshToken);

  return response;
};

// 리프레시 토큰을 이용해 액세스 토큰 재발급
export const reissueToken = async (refreshToken: string) => {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/auth/reissue?refreshToken=${encodeURIComponent(refreshToken)}`, {
      method: 'GET',
    });

    console.log('reissueToken 응답 상태:', response.status);

    if (!response.ok) {
      const errorData = await response.json();
      console.error('reissueToken 에러 응답:', errorData);
      throw new Error('Token reissue failed');
    }

    const data = await response.json();
    console.log('reissueToken 성공 응답:', data);

    // 새로운 액세스 토큰 반환
    if (data.check && data.information && data.information.accessToken) {
      tokenManager.saveToken(ACCESS_TOKEN, data.information.accessToken); // 새 액세스 토큰을 로컬 저장
      return data.information.accessToken; // 정보에서 가져오도록 수정
    } else {
      console.error('reissueToken 응답에 유효한 액세스 토큰이 없습니다:', data);
      return null;
    }
  } catch (error) {
    console.error('reissueToken 함수 에러:', error);
    return null;
  }
};
