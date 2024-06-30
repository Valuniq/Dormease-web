import { RefundRequestmentResponse } from '@/types/refund';

const accessToken =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjAxOkFETUlOIiwiaXNzIjoiRG9ybWVhc2VWYWx1bmlRIiwiaWF0IjoxNzE5NzY4MDEwLCJleHAiOjE3MTk3Njk4MTB9.bB4e7345Bj8u-wlrXpaLJva0ZlJNlDIQHFwgCrrQbQUlOEQcJVP_B93ZdpzycCTJTqgTGGBl5q-Y6E1EZ5Pwwg';

export const getRefundRequestment = async (url: string): Promise<RefundRequestmentResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Server responded with status ${res.status}`);
  }

  const data: RefundRequestmentResponse = await res.json();

  return data;
};
