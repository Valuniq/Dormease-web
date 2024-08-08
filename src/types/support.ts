import { UrlWithStringQuery } from 'url';
import { PageInfo } from './pageInfo';

// faq 목록 조회
export type supportResponse = {
  check: boolean;
  information: {
    pageInfo: PageInfo;
    dataList: supportResponseDataList[];
  };
};

export type supportResponseDataList = {
  notificationId: number;
  pinned: boolean;
  title: string;
  writer: string;
  createdDate: string;
  existFile: boolean;
};

// 공지사항 상세 조회
export type supportDetailResponse = {
  check: boolean;
  information: {
    pinned: boolean;
    title: string;
    writer: string;
    createdDate: string;
    modifiedDate: string;
    content: string;
    imageResList: supportDetailResponseImageResList[];
    fileList: supportDetailResponseFileList[];
  };
};
export type supportDetailResponseImageResList = {
  imageId: number;
  imageUrl: string;
};

export type supportDetailResponseFileList = {
  fileId: number;
  fileUrl: string;
  originalFileName: string;
};

// 공지사항 등록
export type supportPostRequest = {
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
