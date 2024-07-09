export type RequestResponse = {
  check: boolean;
  information: {
    pageInfo: RequestResponsePageInfo;
    dataList: RequestResponseDataList[];
  };
};

export type RequestResponsePageInfo = {
  currentPage: number;
  totalPage: number;
  pageSize: number;
  totalElements: number;
};

export type RequestResponseDataList = {
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
