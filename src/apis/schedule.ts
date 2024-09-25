import { BASE_URL } from '@/constants/path';
import { CalendarRequest, CalendarResponse } from '@/types/schedule';
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

//일정 등록
export const postCalendar = async (data: CalendarRequest) => {
  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/calendar`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return res;
};

//일별 일정 목록 조회
export const getCalendarDateList = async (date: string) => {
  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/calendar/date/${date}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};

//일정 상세 조회
export const getCalendarDetail = async (calendarId: number) => {
  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/calendar/${calendarId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};

//일정 수정
export const putCalendar = async (calendarId: number, data: CalendarRequest) => {
  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/calendar/${calendarId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return res;
};

//일정 삭제
export const deleteCalendar = async (calendarId: number) => {
  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/calendar/${calendarId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};
