import { atom } from 'recoil';

export const requestIdState = atom<number>({
  key: 'requestIdState',
  default: 0,
});
