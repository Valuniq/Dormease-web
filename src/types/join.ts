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
  dormitorySize: number;
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

// 입사 신청 설정 생성
export type joinPostRequest = {
  title: string;
  startDate: string;
  endDate: string;
  depositStartDate: string; //입금 시작일
  depositEndDate: string; //입금 마감일
  securityDeposit: number | null; //보증금
  dormitoryRoomTypeReqList: joinPostRequestDormitoryRoomTypeReqList[]; //입사 신청 설정에 사용되는 기숙사 정보 리스트
  termReqList: joinPostRequestTermReqList[]; //거주 기간 리스트
  mealTicketReqList: joinPoistRequestMealTicketReqList[] | [];
};

export type joinPostRequestDormitoryRoomTypeReqList = {
  dormitoryRoomTypeId: number; // 기숙사(인실/성별) 구분 ID
  acceptLimit: number | null; //수용 인원
};

export type joinPostRequestTermReqList = {
  termName: string;
  startDate: string;
  endDate: string;
  dormitoryTermReqList: joinPostRequestTermReqListDormitoryTermReqList[]; //기숙사와 거주기간 중간 테이블을 위한 리스트
};

export type joinPostRequestTermReqListDormitoryTermReqList = {
  dormitoryRoomTypeId: number;
  price: number | null;
};

export type joinPoistRequestMealTicketReqList = {
  count: number;
  price: number;
};

// 입사 신청 기간인지 조회
export type isJoinPeriodResponse = {
  check: boolean;
  information: {
    isPeriod: boolean;
  };
};

// 이전 작성 내용 목록 조회
export type joinHistoryResponse = {
  check: boolean;
  information: joinHistoryResponseInformation[];
};

export type joinHistoryResponseInformation = {
  dormitoryApplicationSettingId: number;
  titile: string;
  createdDate: string;
};

// 현재 입사 신청 설정 조회
export type nowJoinResponse = {
  check: boolean;
  information: nowJoinResponseInformation;
};

export type nowJoinResponseInformation = {
  dormitoryApplicationSettingId: number;
  title: string;
  startDate: string;
  endDate: string;
  depositStartDate: string; //입금 시작일
  depositEndDate: string; //입금 마감일
  securityDeposit: number | null; //보증금
  applicationStatus: 'BEFORE' | 'NOW' | 'READY' | 'DEPOSIT' | 'PASS ';

  dormitorySettingTermResList: nowJoinResponseDormitorySettingTermResList[]; // 기숙사 정보 리스트
  termResList: nowJoinResponseTermResList[]; //거주 기간 리스트
  mealTicketResList: nowJoinResponseMealTicketResList[] | [];
};

// 기숙사 정보 리스트
export type nowJoinResponseDormitorySettingTermResList = {
  dormitorySettingTermId: number;
  dormitoryRoomTypeId: number;
  dormitoryName: string;
  roomSize: number;
  gender: 'MALE' | 'FEMALE' | 'EMPTY';
  acceptLimit: number | null;
};

// 거주 기간 리스트
export type nowJoinResponseTermResList = {
  termId: number;
  termName: string;
  startDate: string;
  endDate: string;
  dormitoryTermResList: nowJoinResponseTermResListDormitoryTermResList[];
};

export type nowJoinResponseTermResListDormitoryTermResList = {
  dormitoryTermId: number;
  dormitoryRoomTypeId: number;
  price: number | null;
};

// 식권 정보 리스트
export type nowJoinResponseMealTicketResList = {
  id: number;
  count: number;
  price: number;
};

// 입사 신청 설정 수정 요청 타입
export type ModifyDormitoryApplicationSettingReq = {
  title: string;
  startDate: string;
  endDate: string;
  depositStartDate: string;
  depositEndDate: string;
  securityDeposit: number | null;
  modifyDormitorySettingTermReqList: ModifyDormitorySettingTermReq[]; // 기숙사 설정 리스트
  modifyTermReqList: ModifyTermReq[]; // 기간 설정 리스트
  modifyMealTicketReqList: ModifyMealTicketReq[]; // 식권 설정 리스트
};

// 기숙사 정보 리스트 (수용 인원 포함)
export type ModifyDormitorySettingTermReq = {
  dormitorySettingTermId: number;
  dormitoryRoomTypeId: number;
  acceptLimit: number;
};

// 거주 기간 리스트
export type ModifyTermReq = {
  termId: number;
  termName: string;
  startDate: string;
  endDate: string;
  modifyDormitoryTermReqList: ModifyDormitoryTermReq[];
};

// 각 기숙사와 기간 연결 정보
export type ModifyDormitoryTermReq = {
  dormitoryRoomTypeId: number;
  price: number | null;
};

// 식권 정보 리스트
export type ModifyMealTicketReq = {
  mealTicketId: number;
  count: number;
  price: number;
};
