import { PointListResponseInfo } from '@/types/pointManagement';
import { atom } from 'recoil';

// * [StudentManagement/PointManagement] 상태 관리

// * 상/벌점 부여를 위한 선택한 학생 id 관리
export const selectedMemberIdForPoint = atom<number[]>({
  key: 'selectedMemberIdForPoint',
  default: [],
});

// * 상/벌점 리스트 관리
export const penaltyPromptBonusList = atom<PointListResponseInfo[]>({
  key: 'PenaltyPromptBonusList',
  default: [{}],
});

// * 상/벌점 리스트 중 벌점 관리
export const penaltyPromptMinusList = atom<PointListResponseInfo[]>({
  key: 'penaltyPromptMinusList',
  default: [{}],
});
