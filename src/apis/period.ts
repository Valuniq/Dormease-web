import { BASE_URL } from '@/constants/path';
import swrWithToken from '@/utils/swrWithToken';

//신청 기간 등록
export const postPeriod = async (startDate: string, endDate: string, periodType: 'LEAVE' | 'REFUND' | 'ROOMMATE') => {
  const res = await swrWithToken(`${BASE_URL}/api/v1/web/period`, {
    method: 'POST',
    body: JSON.stringify({
      startDate: startDate,
      endDate: endDate,
      periodType: periodType,
    }),
  });
  return res;
};
