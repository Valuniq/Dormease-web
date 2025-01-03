import { Props } from '@/components/templates/PassMember/PassMemberListBody';

// 목업 데이터
export const mockPassMemberList: Props[] = [
  {
    degree: 1,
    name: '김철수',
    studentId: '20210101',
    gender: '남',
    isSmoking: false,
    appliedRoommate: '박영희',
    bedNumber: 1,
    room: 101,
    assignment: true,
  },
  {
    degree: 2,
    name: '박영희',
    studentId: '20210202',
    gender: '여',
    isSmoking: true,
    appliedRoommate: '김철수',
    bedNumber: 2,
    room: 102,
    assignment: true,
  },
  {
    degree: 3,
    name: '이민수',
    studentId: '20210303',
    gender: '남',
    isSmoking: false,
    appliedRoommate: '최지우',
    bedNumber: 3,
    room: 103,
    assignment: false,
  },
  {
    degree: 4,
    name: '최지우',
    studentId: '20210404',
    gender: '여',
    isSmoking: true,
    appliedRoommate: '이민수',
    bedNumber: 4,
    room: 104,
    assignment: true,
  },
  {
    degree: 5,
    name: '홍길동',
    studentId: '20210505',
    gender: '남',
    isSmoking: false,
    appliedRoommate: '',
    bedNumber: 5,
    room: 105,
    assignment: false,
  },
];
