type DepositListResponse = {
  check: true;
  information: DepositListResponseInformation[];
};

type DepositListResponseInformation = {
  dormitoryApplicationId: number;
  studentName: string;
  studentNumber: string;
  gender: 'MALE' | 'FEMALE';
  resultDormitoryRoomTypeRes: {
    dormitoryName: string;
    roomSize: number;
  };
  dormitoryApplicationResult: 'PASS' | 'NON_PASS' | 'MOVE_PASS' | 'WAIT';
};
