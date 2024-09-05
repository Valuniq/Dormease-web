import { PointListResponseInfo } from '@/types/point';
import { atom } from 'recoil';

// * [StudentManagement/PointManagement] 상태 관리

// * 상/벌점 부여를 위한 선택한 학생 id 관리
export const selectedMemberIdForPointState = atom<number[]>({
  key: 'selectedMemberIdForPointState',
  default: [],
});

// * 상/벌점 리스트 중 서버에서 불러온 상점 관리
export const promptBonusState = atom<PointListResponseInfo[]>({
  key: 'PromptBonusState',
  default: [{ content: '', score: 0, pointType: 'BONUS', pointId: -1 }],
});

// * 상/벌점 리스트 중 서버에서 불러온 벌점 관리
export const promptMinusState = atom<PointListResponseInfo[]>({
  key: 'promptMinusState',
  default: [{ content: '', score: 0, pointType: 'MINUS', pointId: -1 }],
});

// * 상/벌점 리스트 중 클라이언트에서 임의로 관리하기 위한 상점 관리
export const promptClientBonusState = atom<PointListResponseInfo[]>({
  key: 'promptClientBonusState',
  default: [{ content: '', score: 0, pointType: 'BONUS', pointId: -1 }],
});

// * 상/벌점 리스트 중 클라이언트에서 임의로 관리하기 위한 벌점 관리
export const promptClientMinusState = atom<PointListResponseInfo[]>({
  key: 'promptClientMinusState',
  default: [{ content: '', score: 0, pointType: 'MINUS', pointId: -1 }],
});

// * 상/벌점 리스트 중 서버에서 불러온 내역 중 삭제된 id 관리
export const deletedPointInfoState = atom<PointListResponseInfo[]>({
  key: 'deletedPointInfoState',
  default: [{ content: '', score: 0, pointType: 'MINUS', pointId: -1 }],
});

export type TPointManagementModalState = {
  pointManagement: boolean;
  pointManagementConfirm: boolean;
  pointHistory: boolean;
  pointHistoryConfirm: boolean;
  pointGive: boolean;
  pointGiveConfirm: boolean;
};

export const pointManagementModalState = atom<TPointManagementModalState>({
  key: 'pointManagementModalState',
  default: {
    pointManagement: false,
    pointManagementConfirm: false,
    pointHistory: false,
    pointHistoryConfirm: false,
    pointGive: false,
    pointGiveConfirm: false,
  },
});

// 선택한 상/벌점 userPointId 상태
export const selectedPointsForPenaltyState = atom<number[]>({
  key: 'selectedPointsForPenaltyState',
  default: [],
});
