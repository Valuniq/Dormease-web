import { PageInfo } from './pageInfo';

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
  check: boolean;
  information: {
    pinned: boolean;
    title: string;
    writer: string;
    createdDate: string;
    modifiedDate: string;
    blockResList: noticeDetailResponseBlockResList[];
    fileList: noticeDetailResponseFileList[];
  };
};

export type noticeDetailResponseBlockResList = {
  blockId: number;
  imageUrl: string;
  sequence: number;
  content: string;
};

export type noticeDetailResponseFileList = {
  fileId: number;
  fileUrl: string;
  originalFileName: string;
};

// 공지사항 등록
export type noticePostRequest = {
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
