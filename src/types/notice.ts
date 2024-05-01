export type noticeList = {
  index: string;
  title: string;
  writer: string;
  registrationDate: string;
  isExistedFile: boolean;
  views: number;
  isPinned: boolean;
};

export type noticeLists = {
  noticeLists: noticeList[];
};

export type noticePage = {};
