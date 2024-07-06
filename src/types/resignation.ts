export type ResignationListResponse = {
  check: boolean;
  information: {
    pageInfo: ResignationListResponsePageInfo;
    dataList: ResignationListResponseDataList[];
  };
};

export type ResignationListResponsePageInfo = {
  currentPage: number;
  totalPage: number;
  pageSize: number;
  totalElements: number;
};

export type ResignationListResponseDataList = {
  exitRequestmentId: number;
  residentName: string;
  studentNumber: string;
  dormitoryName: string;
  roomSize: number;
  roomNumber: number;
  exitDate: string;
  hasKey: null | boolean;
  createDate: string;
  securityDepositReturnStatus: null | 'PAYMENT' | 'UNPAID' | 'UNALBE';
};

export type ResignationDetailResponse = {
  check: boolean;
  information: ResignationDetailResponseInformation;
};

export type ResignationDetailResponseInformation = {
  exitRequestmentId: number;
  residentName: string;
  major: string;
  studentNumber: string;
  schoolYear: number;
  phoneNumber: string;
  dormitoryName: string;
  roomSize: number;
  securityDepositReturnStatus: null | 'PAYMENT' | 'UNPAID' | 'UNALBE';
  roomNumber: number;
  bedNumber: number;
  hasKey: false;
  keyNumber: null | string;
  exitDate: string;
  bankName: string;
  accountNumber: string;
};
