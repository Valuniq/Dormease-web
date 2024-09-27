export type joinDormitoriesResponse = {
  check: boolean;
  information: joinDormitoriesResponseInformation[];
};

export type joinDormitoriesResponseInformation = {
  dormitoryRoomTypeId: number;
  dormitoryName: string;
  roomSize: number;
  gender: 'MALE' | 'FEMALE' | 'EMPTY';
};

export type joinTopThreeListResponse = {
  check: boolean;
  information: joinTopThreeListResponseInformation[];
};

export type joinTopThreeListResponseInformation = {
  dormitoryApplicationSettingId: number;
  title: string;
  startDate: string;
  endDate: string;
};
