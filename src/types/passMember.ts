export type passMemberResponse = {
  check: boolean;
  information: {
    dormitoryApplicationSettingId: number;
    passDormitoryApplicationResList: passMemberResponseInformation[];
  };
};

export type passMemberResponseInformation = {
  dormitoryApplicationId: number;
  studentName: string;
  studentNumber: string;
  gender: string;
  smoker: boolean;
  roommateCode: string;
  bedNumber: number | null;
  roomNumber: number | null;
  assignment: boolean | null;
};

export type passMemberDormitoryResponse = {
  check: boolean;
  information: passMemberDormitoryResponseInformation[];
};

export type passMemberDormitoryResponseInformation = {
  dormitoryId: number;
  dormitoryName: string;
};
