import { atom } from 'recoil';

export const selectedMemberIdForBlacklistState = atom<number[]>({
  key: 'selectedMemberIdForBlacklistState',
  default: [],
});
