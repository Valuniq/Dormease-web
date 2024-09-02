import { PageInfo } from './pageInfo';

// * 사생 목록 조회
export type PointMemberResponse = {
  check: boolean;
  information: {
    pageInfo: PageInfo;
    dataList: PointMemberResponseDataList[];
  };
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
  content: string;
  score: number;
  pointType: 'BONUS' | 'MINUS';
};

// * 사생 상벌점 내역 조회
export type ResidentPointResponse = {
  pagdInfo: PageInfo;
  userPointDetailRes: ResidentPointResponseUserPointDetailRes[];
  bonusPoint: number;
  minusPoint: number;
};

export type ResidentPointResponseUserPointDetailRes = {
  userPointId: number;
  content: string;
  createdAt: string;
  score: number;
  pointType: number;
};