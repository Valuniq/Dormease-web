import { recoilPersist } from 'recoil-persist';

import { atom } from 'recoil';

const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

export const { persistAtom } = recoilPersist({
  key: 'studentIdState',
  storage: sessionStorage,
});

export const studentIdState = atom<number>({
  key: 'studentIdState',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
