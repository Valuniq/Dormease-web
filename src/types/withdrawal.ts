export type withdrawalList = {
  id: number;
  name: string;
  studentNumber: string;
  bonusPoint: number;
  minusPoint: number;
  deletedAt: string;
};

export type withdrawalLists = {
  check: boolean;
  information: withdrawalList[];
};
