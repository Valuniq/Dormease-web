export type joinDormitoriesResponse = {
  check: boolean;
  information: joinDormitoriesResponseInformation[];
};

export type joinDormitoriesResponseInformation = {
  dormitoryRoomTypeId: number;
  dormitoryName: string;
  roomSize: number;
  gender: 'MALE' | 'FEMAIL' | 'EMPTY';
};
