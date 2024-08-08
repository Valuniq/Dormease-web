export type DormNameResponse = {
  check: boolean;
  information: DormNameResponseInformation[];
};

export type DormNameResponseInformation = {
  id: number;
  name: string;
};

export type DormInfoResponse = {
  check: boolean;
  information: DormInfoResponseInformation;
};

export type DormInfoResponseInformation = {
  name: string;
  imageUrl: string | null;
  fullRoomCount: number;
  roomCount: number;
  currentPeopleCount: number;
  dormitorySize: number;
  memo: string | null;
};

export type DormFloorResponse = {
  check: boolean;
  information: DormFloorResponseInformation[];
};

export type DormFloorResponseInformation = {
  floor: number;
};

export type DormRoomResponse = {
  check: boolean;
  information: DormRoomResponseInformation[];
};

export type DormRoomResponseInformation = {
  id: number;
  roomNumber: number;
  gender: 'MALE' | 'FEMALE';
  roomSize: number;
  currentPeople: number;
};

export type DormMemoResponse = {
  check: boolean;
  information: {
    message: string;
  };
};

export type DormRoomInAssignedResponse = {
  check: boolean;
  information: DormRoomInAssignedResponseInformation[];
};

export type DormRoomInAssignedResponseInformation = {
  id: number;
  studentNumber: string;
  name: string;
  phoneNumber: string;
  assigned: boolean;
};

export type DormRoomManualRequest = {
  roomId: number;
  residentIds: number[];
};

export type DormRoomAssigned = {
  roomId: number;
  resident: DormRoomInAssignedResponseInformation[];
};
