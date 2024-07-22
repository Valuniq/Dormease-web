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
    content: string;
    imageResList: faqDetailResponseImageResList[];
    fileList: faqDetailResponseFileList[];
  };
};
export type faqDetailResponseImageResList = {
  imageId: number;
  imageUrl: string;
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
  writer?: string;
  notificationType: string;
  content: string;
  imageReqList: ImageReq[];
  files: FileReq[];
};

export type ImageReq = {
  imageUrl: string;
  imageId: number;
};

export type FileReq = {
  fileId: number;
  fileUrl: string;
  originalFileName: string;
};
