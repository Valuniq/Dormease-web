export type BuildingSettingsResponse = {
  check: boolean;
  information: BuildingSettingsResponseInformation[];
};

export type BuildingSettingsResponseInformation = {
  id: number;
  name: string;
  imageUrl: string;
  assignedResidents: boolean;
};

export type BuildingAddDeleteResponse = {
  check: boolean;
  information: {
    message: string;
  };
};

export type BuildingSettingsDetailResponse = {
  check: boolean;
  information: {
    id: number;
    name: string;
    imageUrl: File | null;
    floorAndRoomNumberRes: BuildingSettingsDetailResponseFloorAndRoomNumberRes[];
  };
};

export type BuildingSettingsDetailResponseFloorAndRoomNumberRes = {
  floor: number;
  startRoomNumber: number;
  endRoomNumber: number;
};
