export type WithdrawalListResponse = {
  check: boolean;
  information: {
    pageInfo: WithdrawalListResponsePageInfo;
    dataList: WithdrawalListResponseDataList[];
  };
};

export type WithdrawalListResponsePageInfo = {
  currentPage: number;
  totalPage: number;
  pageSize: number;
  totalElements: number;
};

export type WithdrawalListResponseDataList = {
  id: number;
  name: string;
  studentNumber: string;
  bonusPoint: number;
  minusPoint: number;
  deletedAt: string;
};
