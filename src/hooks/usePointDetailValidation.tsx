import { PointListResponseInfo } from '@/types/pointManagement';

export const usePointDetailValidation = (lists: PointListResponseInfo[][]) => {
  const isListEmpty = (list: PointListResponseInfo[]) => list.some((item) => item.content === '' || !item.score);

  const isAllListsValid = () => {
    return lists.every((list) => !isListEmpty(list));
  };

  return isAllListsValid;
};
