// 오늘 날짜 가져오는 함수
export const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // 월을 2자리 숫자로 표현
  const day = String(today.getDate()).padStart(2, '0'); // 일을 2자리 숫자로 표현
  return `${year}-${month}-${day}`;
};

export const todayDate = getTodayDate();

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = String(date.getFullYear()).slice(2); // 연도 마지막 두 자리
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월 두 자리
  const day = String(date.getDate()).padStart(2, '0'); // 일 두 자리
  return `${year}.${month}.${day}`;
};

// 시작 날짜가 종료 날짜보다 뒤에 있는지 검증하는 함수
export const isEndDateBeforeStartDate = (startDate: string, endDate: string): boolean => {
  return new Date(startDate) > new Date(endDate);
};
