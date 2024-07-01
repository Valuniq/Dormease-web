export type RefundRequestmentResponse = {
  check: boolean;
  information: {
    pageInfo: RefundRequestmentResponsePageInfo;
    dataList: RefundRequestmentResponseDataList[];
  };
};

export type RefundRequestmentResponsePageInfo = {
  currentPage: number;
  totalPage: number;
  pageSize: number;
  totalElements: number;
};

export type RefundRequestmentResponseDataList = {
  refundRequestmentId: number;
  residentName: string;
  studentNumber: string;
  phoneNumber: string;
  bankName: string;
  accountNumber: string;
  term: string;
  exitDate: string;
  createDate: string;
  dormitoryName: string;
  roomSize: number;
  roomNumber: number;
  bedNumber: number;
};

export type PeriodResponse = {
  check: true;
  information: {
    message: string;
  };
};
