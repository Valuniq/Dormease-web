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
  floor: number | string;
  startRoomNumber: number | string;
  endRoomNumber: number | string;
};

export type DormSettingDetailResponseInformationFloorDuplicate = {
  duplicateFloor: number;
  floor: number | string;
  startRoomNumber: number;
  endRoomNumber: number;
};

export type DormSettingDetailRoomResponse = {
  check: boolean;
  information: DormSettingDetailRoomResponseInformation[];
};

export type DormSettingDetailRoomResponseInformation = {
  id?: number;
  roomNumber?: number;
  floor?: number;
  hasResident?: boolean;
  gender: 'FEMALE' | 'MALE' | null;
  roomSize: number | null;
  hasKey: boolean | null;
  isActivated: boolean | null;
};
