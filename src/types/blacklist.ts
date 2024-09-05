import { PageInfo } from './pageInfo';

// 블랙리스트 조회
export type blacklistResponse = {
  check: boolean;
  information: {
    pageInfo: PageInfo;
    dataList: blacklistResponseDataList[];
  };
};

export type blacklistResponseDataList = {
  id: number;
  name: string;
  studentNumber: string;
  phoneNumber: string;
  minusPoint: number;
  content: string;
  createdAt: string;
};

// 블랙리스트 사유 작성
export type blacklistPutRequest = {
  blacklistId: number;
  content: string;
};
