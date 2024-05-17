export type buildingList = {
  id: number;
  name: string;
  imageUrl: string;
  assignedResidents: boolean;
};

export type buildingLists = {
  check: boolean;
  information: buildingList[];
};

export type buildingAddDelete = {
  check: boolean;
  information: {
    message: string;
  };
};
