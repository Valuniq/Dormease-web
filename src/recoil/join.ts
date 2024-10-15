import { nowJoinResponse, nowJoinResponseInformation, nowJoinResponseTermResList } from './../types/join';
import { joinDormitoriesResponseInformation, joinPostRequest, joinPostRequestTermReqList } from '@/types/join';
import { atom } from 'recoil';

// 기숙사 정보 상태
export const dormitoryRoomTypeState = atom<joinDormitoriesResponseInformation[]>({
  key: 'dormitoryRoomTypeState',
  default: [], // 기숙사 정보를 불러온 후 동적으로 입력 필드 생성
});

// 통합 상태: 입사 신청 설정 정보
export const joinApplicationState = atom<joinPostRequest>({
  key: 'joinApplicationState',
  default: {
    title: '',
    startDate: '',
    endDate: '',
    depositStartDate: '',
    depositEndDate: '',
    securityDepoist: null,
    dormitoryRoomTypeReqList: [
      { dormitoryRoomTypeId: 0, acceptLimit: null }, // 기본값 설정
    ],
    termReqList: [
      {
        termName: '',
        startDate: '',
        endDate: '',
        dormitoryTermReqList: [
          { dormitoryRoomTypeId: 0, price: null }, // 기본값 설정
        ],
      },
    ],
    mealTicketReqList: [],
  },
});

// 기간별로 금액 입력 필드를 관리하기 위한 상태
export const termReqListState = atom<joinPostRequestTermReqList[]>({
  key: 'termReqListState',
  default: [
    {
      termName: '',
      startDate: '',
      endDate: '',
      dormitoryTermReqList: [
        {
          dormitoryRoomTypeId: 0,
          price: 0,
        },
      ],
    },
    {
      termName: '',
      startDate: '',
      endDate: '',
      dormitoryTermReqList: [
        {
          dormitoryRoomTypeId: 0,
          price: 0,
        },
      ],
    },
    {
      termName: '',
      startDate: '',
      endDate: '',
      dormitoryTermReqList: [
        {
          dormitoryRoomTypeId: 0,
          price: 0,
        },
      ],
    },
    {
      termName: '',
      startDate: '',
      endDate: '',
      dormitoryTermReqList: [
        {
          dormitoryRoomTypeId: 0,
          price: 0,
        },
      ],
    },
  ],
});

export const termReqIsActiveState = atom<boolean[]>({
  key: 'isActiveState',
  default: [true, false, false, false], // 각 기간의 활성화 상태
});

// 비활성화 상태를 저장
export const disabledFieldsState = atom<Record<number, boolean>>({
  key: 'disabledFieldsState',
  default: {},
});

export type JoinModalState = {
  [key: string]: boolean;
};

export const joinModalState = atom<JoinModalState>({
  key: 'joinModalState',
  default: {
    isEmptyAlert: false,
    isPostChecked: false,
  },
});

// NowJoin 관련 recoil
export const nowJoinApplicationState = atom<nowJoinResponseInformation>({
  key: 'nowJoinApplicationState',
  default: {
    dormitoryApplicationSettingId: 0,
    title: '',
    startDate: '',
    endDate: '',
    depositStartDate: '',
    depositEndDate: '',
    securityDeposit: 0,
    applicationStatus: 'NOW',
    dormitorySettingTermResList: [],
    termResList: [],
    mealTicketResList: [],
  },
});

// 기간별로 금액 입력 필드를 관리하기 위한 상태
export const termResListState = atom<nowJoinResponseTermResList[]>({
  key: 'termResListState',
  default: [
    {
      termId: 0,
      termName: '',
      startDate: '',
      endDate: '',
      dormitoryTermResList: [
        {
          dormitoryRoomTypeId: 0,
          dormitoryTermId: 0,
          price: null,
        },
      ],
    },
    {
      termId: 0,
      termName: '',
      startDate: '',
      endDate: '',
      dormitoryTermResList: [
        {
          dormitoryRoomTypeId: 0,
          dormitoryTermId: 0,
          price: 0,
        },
      ],
    },
    {
      termId: 0,
      termName: '',
      startDate: '',
      endDate: '',
      dormitoryTermResList: [
        {
          dormitoryRoomTypeId: 0,
          dormitoryTermId: 0,
          price: 0,
        },
      ],
    },
    {
      termId: 0,
      termName: '',
      startDate: '',
      endDate: '',
      dormitoryTermResList: [
        {
          dormitoryRoomTypeId: 0,
          dormitoryTermId: 0,
          price: 0,
        },
      ],
    },
  ],
});

export const termResIsActiveState = atom<boolean[]>({
  key: 'termResIsActiveState',
  default: [true, false, false, false],
});
