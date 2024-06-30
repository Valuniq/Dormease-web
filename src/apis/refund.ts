import { PeriodResponse, RefundRequestmentResponse } from '@/types/refund';

const accessToken =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjAxOkFETUlOIiwiaXNzIjoiRG9ybWVhc2VWYWx1bmlRIiwiaWF0IjoxNzE5NzcwMjg4LCJleHAiOjE3MTk3NzIwODh9.P2rRwpNSPDdoHfz0y6TQ04MVQWYfaJF0Ca60RvZkfSYMC13uwnlxI5XfjfaL0Tw_xF2pDX_BuVZoQt3dszOugA';

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

export const postPeriod = async (startDate: string, endDate: string, periodType: 'REFUND'): Promise<PeriodResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/web/period`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${accessToken}`,
    },
    body: JSON.stringify({
      startDate: startDate,
      endDate: endDate,
      periodType: periodType,
    }),
  });

  if (!res.ok) {
    throw new Error(`Server responded with status ${res.status}`);
  }

  const data: PeriodResponse = await res.json();

  return data;
};
