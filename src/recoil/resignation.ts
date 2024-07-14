import { recoilPersist } from 'recoil-persist';

import { atom } from 'recoil';

const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

export const { persistAtom } = recoilPersist({
  key: 'resignationIdState',
  storage: sessionStorage,
});

export const resignationIdState = atom<number>({
  key: 'resignationIdState',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
