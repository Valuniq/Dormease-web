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
export type faqDetail = {
  pinned: boolean;
  title: string;
  writer: string;
  createdDate: string;
  modifiedDate: string;
  blockResList: faqDetailBlockResList[];
  fileList: faqDetailFileList[];
};

export type faqDetailBlockResList = {
  blockId: number;
  imageUrl: string;
  sequence: number;
  content: string;
};

export type faqDetailFileList = {
  fileId: number;
  fileUrl: string;
  originalFileName: string;
};
