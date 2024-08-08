export type RequestListResponse = {
  check: boolean;
  information: {
    pageInfo: RequestListResponsePageInfo;
    dataList: RequestListResponseDataList[];
  };
};

export type RequestListResponsePageInfo = {
  currentPage: number;
  totalPage: number;
  pageSize: number;
  totalElements: number;
};

export type RequestListResponseDataList = {
  requestmentId: number;
  title: string;
  writer: string;
  createdDate: string;
  progression: 'IN_REVIEW' | 'IN_PROGRESS' | 'ANSWER_COMPLETED';
};

export type RequestDetailResponse = {
  check: boolean;
  information: RequestDetailResponseInformation;
};

export type RequestDetailResponseInformation = {
  requestmentId: number;
  myRequestment: boolean;
  title: string;
  content: string;
  writer: string;
  createdDate: string;
  consentDuringAbsence: boolean;
  visibility: boolean;
  progression: 'IN_REVIEW' | 'IN_PROGRESS' | 'ANSWER_COMPLETED';
};
