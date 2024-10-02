export type TodayScheduleResponse = {
  check: boolean;
  information: TodayScheduleResponseInformation[];
};

export type TodayScheduleResponseInformation = {
  calendarId: number;
  title: string;
  color: 'GREY' | 'RED' | 'GREEN' | 'YELLOW' | 'BLUE';
};

export type RefundResponse = {
  check: boolean;
  information: RefundResponseInformation[];
};

export type RefundResponseInformation = {
  refundRequestmentId: number;
  residentName: string;
  studentNumber: string;
  dormitoryName: string;
  roomNumber: number;
  createDate: string;
};

export type NoticeResponse = {
  check: boolean;
  information: NoticeResponseInformation[];
};

export type NoticeResponseInformation = {
  notificationId: number;
  title: string;
  createdDate: string;
};

export type RequestResponse = {
  check: boolean;
  information: RequestResponseInformation[];
};

export type RequestResponseInformation = {
  requestmentId: number;
  title: string;
  writer: string;
  createdDate: string;
};
