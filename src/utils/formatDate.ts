// 날짜 포맷팅 함수
// YYYY-MM-DD -> YY.MM.DD

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = String(date.getFullYear()).slice(2); // 연도 마지막 두 자리
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월 두 자리
  const day = String(date.getDate()).padStart(2, '0'); // 일 두 자리
  return `${year}.${month}.${day}`;
};
