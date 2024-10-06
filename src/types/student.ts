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
