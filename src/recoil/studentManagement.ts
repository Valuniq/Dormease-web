import { atom } from 'recoil';

export const studentIdState = atom<number>({
  key: 'studentIdState',
  default: 0,
});
