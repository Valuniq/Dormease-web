import { PageInfo } from './pageInfo';

export type StudentListResponse = {
  check: boolean;
  information: {
    pageInfo: PageInfo;
    dataList: StudentListResponseDataList[];
  };
};

export type StudentListResponseDataList = {
  residentId: number;
  name: string;
  studentNumber: string;
  gender: 'MALE' | 'FEMALE';
  bonusPoint: number;
  minusPoint: number;
  dormitoryName: string;
  roomSize: number;
  roomNumber: number;
  schoolStatus: 'ENROLLMENT' | 'LEAVE_OF_ABSENCE' | 'EXPULSION';
};

export type StudentDetailResponse = {
  check: boolean;
  information: {
    residentPrivateInfoRes: StudentDetailResponseInformationResidentPrivateInfoRes;
    residentDormitoryInfoRes: StudentDetailResponseInformationResidentDormitoryInfoRes;
  };
};

export type StudentDetailResponseInformationResidentPrivateInfoRes = {
  residentId: number;
  name: string;
  studentNumber: string;
  major: string;
  schoolYear: number | null;
  schoolStatus: 'ENROLLMENT' | 'LEAVE_OF_ABSENCE' | 'EXPULSION' | '';
  gender: 'MALE' | 'FEMALE';
  phoneNumber: string;
  address: string;
  copy: string;
  prioritySelectionCopy: string;
  mealTicketCount: number | null;
  isSmoking: boolean;
  dormitoryPayment: boolean;
  hasKey: boolean;
  bonusPoint: number;
  minusPoint: number;
  personalInfoConsent: boolean;
  thirdPartyConsent: boolean;
  bankName: string;
  accountNumber: string;
  emergencyContact: string;
  emergencyRelation: string;
};

export type StudentDetailResponseInformationResidentDormitoryInfoRes = {
  dormitoryId: number;
  dormitoryName: string;
  roomSize: number | null;
  roomNumber: number | null;
  bedNumber: number | null;
  termId: number;
  termName: string;
  isApplyRoommate: boolean;
  roommateNames: string[];
};

export type BuildingList = {
  dormitoryId: number;
  dormitoryName: string;
  roomSize: number;
};

export type TermResponse = {
  check: boolean;
  information: TermResponseInformation[];
};

export type TermResponseInformation = {
  dormitoryApplicationSettingId: number;
  title: string;
  availableTermRes: {
    termId: number;
    termName: string;
  }[];
};

export type StudentInfoEditRequest = {
  residentDormitoryInfoReq: {
    dormitoryId: number;
    roomSize: number | null;
    roomNumber: number | null;
    bedNumber: number | null;
    termId: number;
  };
  residentPrivateInfoReq: {
    dormitoryPayment: boolean;
    hasKey: boolean;
    bankName: string;
    accountNumber: string;
    emergencyContact: string;
    emergencyRelation: string;
  };
};

export type AddStudentRequest = {
  name: string;
  gender: string;
  hasKey: boolean;
  residentDormitoryInfoReq: {
    dormitoryId: number;
    roomSize: number | null;
    roomNumber: number | null;
    bedNumber: number | null;
    termId: number;
  };
};
