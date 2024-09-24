import { BASE_URL } from '@/constants/path';
import { CalendarResponse } from '@/types/schedule';
import fetchWithTokens from '@/utils/fetchWithTokens';
import useSWR from 'swr';

//연도, 월별 일정 목록 조회
export const useCalendarList = (year: number, month: number) => {
  const { data, error, mutate } = useSWR<CalendarResponse>(
    `${BASE_URL}/api/v1/web/calendar?year=${year}&month=${month}`,
    fetchWithTokens,
  );
  return { data, error, isLoading: !error && !data, mutate };
};
