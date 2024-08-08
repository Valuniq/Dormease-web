export type RefundListResponse = {
  check: boolean;
  information: {
    pageInfo: RefundListResponsePageInfo;
    dataList: RefundListResponseDataList[];
  };
};

export type RefundListResponsePageInfo = {
  currentPage: number;
  totalPage: number;
  pageSize: number;
  totalElements: number;
};

export type RefundListResponseDataList = {
  refundRequestmentId: number;
  residentName: string;
  studentNumber: string;
  phoneNumber: string;
  bankName: string;
  accountNumber: string;
  termName: string;
  exitDate: string;
  createDate: string;
  dormitoryName: string;
  roomSize: number;
  roomNumber: number;
  bedNumber: number;
};
