import { atom } from 'recoil';

export const resignationIdState = atom<number>({
  key: 'resignationIdState',
  default: 0,
});
