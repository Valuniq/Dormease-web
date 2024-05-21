import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/tokenKey';
import { useHandleLoginSuccess } from '@/recoil/user';
import { UserLoginRequest, UserLoginResponse } from '@/types/user';
import tokenManager from '@/utils/tokenManager';

export const signIn = async ({ loginId, password }: UserLoginRequest): Promise<UserLoginResponse> => {
  const res = await fetch(`http://13.209.177.109:8080/api/v1/auth/sign-in`, {
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
