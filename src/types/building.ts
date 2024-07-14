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

export type BuildingSettingDetailResponse = {
  check: boolean;
  information: BuildingSettingDetailResponseInformation;
};

export type BuildingSettingDetailResponseInformation = {
  id: number;
  name: string;
  imageUrl: string | null;
  floorAndRoomNumberRes: BuildingSettingDetailResponseInformationFloor[];
};

export type BuildingSettingDetailResponseInformationFloor = {
  floor: number;
  startRoomNumber: number;
  endRoomNumber: number;
};

export type BuildingSettingDetailRoomResponse = {
  check: boolean;
  information: BuildingSettingDetailRoomResponseInformation[];
};

export type BuildingSettingDetailRoomResponseInformation = {
  id: number;
  roomNumber: number;
  floor: number;
  gender: 'FEMALE' | 'MALE';
  roomSize: number;
  hasKey: boolean;
  isActivated: boolean;
};
