export type faqList = {
  index: string;
  title: string;
  writer: string;
  registrationDate: string;
  isExistedFile: boolean;
  views: number;
  isPinned: boolean;
};

export type faqLists = {
  faqLists: faqList[];
};
