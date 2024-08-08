export type ResignListResponse = {
  check: boolean;
  information: {
    pageInfo: ResignListResponsePageInfo;
    dataList: ResignListResponseDataList[];
  };
};

export type ResignListResponsePageInfo = {
  currentPage: number;
  totalPage: number;
  pageSize: number;
  totalElements: number;
};

export type ResignListResponseDataList = {
  exitRequestmentId: number;
  residentName: string;
  studentNumber: string;
  dormitoryName: string;
  roomSize: number;
  roomNumber: number;
  exitDate: string;
  hasKey: boolean;
  createDate: string;
  securityDepositReturnStatus: 'PAYMENT' | 'UNPAID' | 'UNALBE';
};

export type ResignDetailResponse = {
  check: boolean;
  information: ResignDetailResponseInformation;
};

export type ResignDetailResponseInformation = {
  exitRequestmentId: number;
  residentName: string;
  major: string;
  studentNumber: string;
  schoolYear: number;
  phoneNumber: string;
  dormitoryName: string;
  roomSize: number;
  securityDepositReturnStatus: 'PAYMENT' | 'UNPAID' | 'UNALBE';
  roomNumber: number;
  bedNumber: number;
  hasKey: false;
  keyNumber: null | string;
  exitDate: string;
  bankName: string;
  accountNumber: string;
};
