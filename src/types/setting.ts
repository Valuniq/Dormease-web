export type DormSettingResponse = {
  check: boolean;
  information: DormSettingResponseInformation[];
};

export type DormSettingResponseInformation = {
  id: number;
  name: string;
  imageUrl: string;
  assignedResidents: boolean;
};

export type DormAddDeleteResponse = {
  check: boolean;
  information: {
    message: string;
  };
};

export type DormSettingDetailResponse = {
  check: boolean;
  information: DormSettingDetailResponseInformation;
};

export type DormSettingDetailResponseInformation = {
  id: number;
  name: string;
  imageUrl: string | null;
  floorAndRoomNumberRes: DormSettingDetailResponseInformationFloor[];
};

export type DormSettingDetailResponseInformationFloor = {
  floor: number;
  startRoomNumber: number;
  endRoomNumber: number;
};

export type DormSettingDetailRoomResponse = {
  check: boolean;
  information: DormSettingDetailRoomResponseInformation[];
};

export type DormSettingDetailRoomResponseInformation = {
  id: number;
  roomNumber: number;
  floor: number;
  gender: 'FEMALE' | 'MALE' | 'EMPTY';
  roomSize: number;
  hasKey: boolean;
  isActivated: boolean;
};
