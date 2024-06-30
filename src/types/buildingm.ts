export type BuildingManagementResponse = {
  check: boolean;
  information: BuildingManagementResponseInformation[];
};

export type BuildingManagementResponseInformation = {
  id: number;
  name: string;
};

export type BuildingManagementInfoResponse = {
  check: boolean;
  information: BuildingManagementInfoResponseInformation;
};

export type BuildingManagementInfoResponseInformation = {
  name: string;
  imageUrl: string | null;
  fullRoomCount: number;
  roomCount: number;
  currentPeopleCount: number;
  dormitorySize: number;
  memo: string | null;
};

export type BuildingManagementFloorResponse = {
  check: boolean;
  information: BuildingManagementFloorResponseInformation[];
};

export type BuildingManagementFloorResponseInformation = {
  floor: number;
};

export type BuildingManagementRoomResponse = {
  check: boolean;
  information: BuildingManagementRoomResponseInformation[];
};

export type BuildingManagementRoomResponseInformation = {
  id: number;
  roomNumber: number;
  gender: 'MALE' | 'FEMALE';
  roomSize: number;
  currentPeople: number;
};

export type BuildingManagementMemoResponse = {
  check: boolean;
  information: {
    message: string;
  };
};

export type BuildingRoomInAssignedResponse = {
  check: boolean;
  information: BuildingRoomInAssignedResponseInformation[];
};

export type BuildingRoomInAssignedResponseInformation = {
  id: number;
  studentNumber: string;
  name: string;
  phoneNumber: string;
  assigned: boolean;
};

export type BuildingRoomManualRequest = {
  roomId: number;
  residentIds: number[];
};
