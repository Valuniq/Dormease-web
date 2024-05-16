export type buildingList = {
  id: number;
  name: string;
  imageUrl: string;
};

export type buildingLists = {
  check: boolean;
  information: buildingList[];
};
