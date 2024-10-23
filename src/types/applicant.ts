// 현재 입사 신청 설정에 대한 입사 신청 목록 조회
export type applicantResponse = {
  check: boolean;
  information: {
    dormitoryApplicationSettingId: number;
    dormitoryApplicationWebResList: applicantResponseInformation[];
  };
};

export type applicantResponseInformation = {
  dormitoryApplicationId: number;
  studentName: string;
  studentNumber: string;
  gender: 'MALE' | 'FEMALE' | 'EMPTY';
  applicationDormitoryRoomTypeRes: {
    dormitoryName: string;
    roomSize: number;
  };
  address: string;
  copy: string;
  prioritySelectionCopy: string;
  resultDormitoryRoomTypeRes: {
    dormitoryName: string;
    roomSize: number;
  };
  dormitoryApplicationResult: 'PASS' | 'NON_PASS' | 'MOVE_PASS' | 'WAIT';
};

// 이전 입사 신청 목록 조회
export type historyResponse = {
  check: boolean;
  information: historyResponseInformation[];
};

export type historyResponseInformation = {
  dormitoryApplicationSettingId: number;
  title: string;
  createdDate: string;
};

export type applicationDetailResponse = {
  check: boolean;
  information: applicantResponseInformation[];
};

export type applicationSearchResponse = {
  check: boolean;
  information: applicantResponseInformation[];
};

// // 현재 입사 신청 설정 ID로 입사 신청 목록 조회
// export type applicantResponseByID = {
//   check: boolean;
//   information: applicantResponseByIDInformation[];
// };

// export type applicantResponseByIDInformation = {
//   dormitoryApplicationId: number;
//   studentName: string;
//   studentNumber: string;
//   gender: 'MALE' | 'FEMALE' | 'EMPTY';
//   applicationDormitoryRoomTypeRes: {
//     dormitoryName: string;
//     roomSize: number;
//   };
//   address: string;
//   copy: string;
//   prioritySelectionCopy: string;
//   resultDormitoryRoomTypeRes: {
//     dormitoryName: string;
//     roomSize: number;
//   };
//   dormitoryApplicationResult: 'PASS' | 'NON_PASS' | 'MOVE_PASS' | 'WAIT';
// };

// // 입사 신청 설정에 대한 입사 신청 목록 검색
