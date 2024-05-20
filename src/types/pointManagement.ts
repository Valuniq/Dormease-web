export type PointMemberResponse = {
  check: boolean;
  information: {
    pageInfo: PointMemberResponsePageInfo;
    dataList: PointMemberResponseDataList[];
  };
};

export type PointMemberResponsePageInfo = {
  currentPage: number;
  totalPage: number;
  pageSize: number;
  totalElements: number;
};

export type PointMemberResponseDataList = {
  id: number;
  name: string;
  studentNumber: string;
  phoneNumber: string;
  bonusPoint: number;
  minusPoint: number;
  dormitory: string;
  room: number;
};
