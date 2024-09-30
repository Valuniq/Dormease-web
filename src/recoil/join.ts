import { joinDormitoriesResponseInformation, joinPostRequestTermReqList } from '@/types/join';
import { atom } from 'recoil';

// 기숙사 정보 상태
export const dormitoryRoomTypeState = atom<joinDormitoriesResponseInformation[]>({
  key: 'dormitoryRoomTypeState',
  default: [], // 기숙사 정보를 불러온 후 동적으로 입력 필드 생성
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
