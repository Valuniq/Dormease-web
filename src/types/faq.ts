import { UrlWithStringQuery } from 'url';
import { PageInfo } from './pageInfo';

// faq 목록 조회
export type faqResponse = {
  check: boolean;
  information: {
    pageInfo: PageInfo;
    dataList: faqResponseDataList[];
  };
};

export type faqResponseDataList = {
  notificationId: number;
  pinned: boolean;
  title: string;
  writer: string;
  createdDate: string;
  existFile: boolean;
};

// 공지사항 상세 조회
export type faqDetailResponse = {
  check: boolean;
  information: {
    pinned: boolean;
    title: string;
    writer: string;
    createdDate: string;
    modifiedDate: string;
    blockResList: faqDetailResponseBlockResList[];
    fileList: faqDetailResponseFileList[];
  };
};

export type faqDetailResponseBlockResList = {
  blockId: number;
  imageUrl: string;
  sequence: number;
  content: string;
};

export type faqDetailResponseFileList = {
  fileId: number;
  fileUrl: string;
  originalFileName: string;
};

// 공지사항 등록
export type faqPostRequest = {
  title: string;
  pinned: boolean;
  notificationType: string;
  blockReqList: BlockReq[];
};

export type BlockReq = {
  imageUrl: string;
  sequence: number;
  content: string;
};
