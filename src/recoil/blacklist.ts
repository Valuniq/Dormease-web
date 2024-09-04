import { atom } from 'recoil';

// 상/벌점 부여를 위한 선택한 학생 id 관리
export const selectedMemberIdForBlacklistState = atom<number[]>({
  key: 'selectedMemberIdForBlacklistState',
  default: [],
});
