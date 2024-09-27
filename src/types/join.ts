// 입사 신청 설정 중 기숙사명, 인실, 성별 정보
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

// 이전 입사 신청 설정 내역 3개 조회
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

// 입사 신청 설정
export type joinPostRequest = {
  schoolId: number;
  title: string;
  startDate: string;
  endDate: string;
  depositStartDate: string; //입금 시작일
  depositEndDate: string; //입금 마감일
  securityDepoist: number; //보증금
  dormitoryRoomTypeReqList: joinPostRequestDormitoryRoomTypeReqList[]; //입사 신청 설정에 사용되는 기숙사 정보 리스트
  termReqList: joinPostRequestTermReqList[]; //거주 기간 리스트
  mealTicketReqList: joinPoistRequestMealTicketReqList[];
};

export type joinPostRequestDormitoryRoomTypeReqList = {
  dormitoryRoomTypeId: number; // 기숙사(인실/성별) 구분 ID
  acceptLimit: number; //수용 인원
};

export type joinPostRequestTermReqList = {
  termName: string;
  startDate: string;
  endDate: string;
  dormitoryTermReqList: joinPostRequestTermReqListDormitoryTermReqList[]; //기숙사와 거주기간 중간 테이블을 위한 리스트
};

export type joinPostRequestTermReqListDormitoryTermReqList = {
  dormitoryRoomTypeId: number;
  price: number;
};

export type joinPoistRequestMealTicketReqList = {
  count: number;
  price: number;
};
