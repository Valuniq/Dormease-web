// * 사생 목록 조회
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

// * 상/벌점 리스트 조회
export type PointListResponse = {
  check: boolean;
  information: PointListResponseInfo[];
};

export type PointListResponseInfo = {
  pointId: number;
  content?: string;
  score?: number;
  pointType?: 'BONUS' | 'MINUS';
};
