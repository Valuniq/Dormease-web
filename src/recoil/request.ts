import { recoilPersist } from 'recoil-persist';

import { atom } from 'recoil';

const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

export const { persistAtom } = recoilPersist({
  key: 'requestIdState',
  storage: sessionStorage,
});

export const requestIdState = atom<number>({
  key: 'requestIdState',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
