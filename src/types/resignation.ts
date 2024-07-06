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
