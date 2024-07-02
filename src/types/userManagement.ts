import { PageInfo } from './pageInfo';
// 회원 목록 조회
export type userResponse = {
  check: boolean;
  information: {
    pageInfo: PageInfo;
    dataList: userResponseDataList[];
  };
};

export type userResponseDataList = {
  id: number;
  name: string;
  studentNumber: string;
  phoneNumber: string;
  bonusPoint: number;
  minusPoint: number;
  createdAt: string;
};
