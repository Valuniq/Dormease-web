export type WithdrawalMemberResponse = {
  check: boolean;
  information: {
    pageInfo: WithdrawalMemberResponsePageInfo;
    dataList: WithdrawalMemberResponseDataList[];
  };
};

export type WithdrawalMemberResponsePageInfo = {
  currentPage: number;
  totalPage: number;
  pageSize: number;
  totalElements: number;
};

export type WithdrawalMemberResponseDataList = {
  id: number;
  name: string;
  studentNumber: string;
  bonusPoint: number;
  minusPoint: number;
  deletedAt: string;
};
