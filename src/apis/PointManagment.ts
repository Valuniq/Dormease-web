import tokenManager from '@/utils/tokenManager';

export const getPointsMemberList = async () => {
  const res = await fetch('/api/v1/web/points', {
    method: 'GET',
    headers: {
      accessToken: tokenManager.getAccessToken(),
    },
  });

  if (!res.ok) {
    throw new Error('Failed');
  }
  const response = await res.json();
  return response;
};
