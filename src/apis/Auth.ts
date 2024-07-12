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
