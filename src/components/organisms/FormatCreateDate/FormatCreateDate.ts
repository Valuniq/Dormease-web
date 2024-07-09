//날짜 변환
export const formatCreateDate = (date: string): string => {
  let formattedDate = date.startsWith('20') ? date.slice(2) : date;
  formattedDate = formattedDate.replace(/-/g, '.');
  return formattedDate;
};
