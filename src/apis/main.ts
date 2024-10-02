import { BASE_URL } from '@/constants/path';
import { RefundResponse, NoticeResponse, RequestResponse, TodayScheduleResponse } from '@/types/main';
import fetchWithTokens from '@/utils/fetchWithTokens';
import useSWR from 'swr';

// 환불 신청 사생 목록 조회
export const useMainRefund = () => {
  const { data, error } = useSWR<RefundResponse>(`${BASE_URL}/api/v1/web/refundRequestment/main`, fetchWithTokens);
  return { data, error, isLoading: !error && !data };
};

// 공지사항 목록 조회
export const useMainNotice = () => {
  const { data, error } = useSWR<NoticeResponse>(`${BASE_URL}/api/v1/web/notifications/main`, fetchWithTokens);
  return { data, error, isLoading: !error && !data };
};

// 요청사항 목록 조회
export const useMainRequest = () => {
  const { data, error } = useSWR<RequestResponse>(`${BASE_URL}/api/v1/web/requestments/main`, fetchWithTokens);
  return { data, error, isLoading: !error && !data };
};

// 오늘의 일정 목록 조회
export const useMainTodaySchedule = () => {
  const { data, error } = useSWR<TodayScheduleResponse>(`${BASE_URL}/api/v1/web/calendar/today`, fetchWithTokens);
  return { data, error, isLoading: !error && !data };
};
