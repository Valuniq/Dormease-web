import { BASE_URL } from '@/constants/path';
import { AdminAccountResponse, SecurityCodeResponse } from '@/types/account';
import fetchWithTokens from '@/utils/fetchWithTokens';
import useSWR from 'swr';

//관리자 소속 학교, 아이디, 이름 조회
export const useAdminAccount = () => {
  const { data, error, mutate } = useSWR<AdminAccountResponse>(`${BASE_URL}/api/v1/web/admin/account`, fetchWithTokens);
  return { data, error, isLoading: !error && !data, mutate };
};

//관리자 이름 변경
export const putAdminAccountName = async (adminName: string) => {
  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/admin/account/name`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      adminName: adminName,
    }),
  });
  return res;
};

// 보안 코드
export const checkSecurityCode = async (securityCode: string): Promise<SecurityCodeResponse> => {
  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/admin/account/securityCode?securityCode=${securityCode}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};

//관리자 비밀번호 변경
export const putAdminPassword = async (password: string) => {
  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/admin/account/password`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password: password,
    }),
  });
  return res;
};
