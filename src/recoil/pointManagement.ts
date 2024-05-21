import { atom } from 'recoil';

export const selectedMemberIdForPoint = atom<number[]>({
  key: 'selectedMemberIdForPoint',
  default: [],
});
