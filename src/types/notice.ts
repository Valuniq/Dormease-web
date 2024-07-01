import { UrlWithStringQuery } from 'url';
import { PageInfo } from './pageInfo';

// export type noticeList = {
//   index: string;
//   title: string;
//   writer: string;
//   registrationDate: string;
//   isExistedFile: boolean;
//   views: number;
//   isPinned: boolean;
// };

// export type noticeLists = {
//   noticeLists: noticeList[];
// };

// export type noticePage = {};

// notice 목록 조회
export type noticeResponse = {
  check: boolean;
  information: {
    pageInfo: PageInfo;
    dataList: noticeResponseDataList[];
  };
};

export type noticeResponseDataList = {
  notificationId: number;
  pinned: boolean;
  title: string;
  writer: string;
  createdDate: string;
  existFile: boolean;
};

// 공지사항 상세 조회
export type noticeDetailResponse = {
  pinned: boolean;
  title: string;
  writer: string;
  createdDate: string;
  modifiedDate: string;
  blockResList: noticeDetailResponseBlockResList[];
  fileList: noticeDetailResponseFileList[];
};

export type noticeDetailResponseBlockResList = {
  blockId: number;
  imageUrl: UrlWithStringQuery;
  sequence: number;
  content: string;
};

export type noticeDetailResponseFileList = {
  fileId: number;
  fileUrl: string;
  originalFileName: string;
};
