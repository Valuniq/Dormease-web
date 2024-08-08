import { recoilPersist } from 'recoil-persist';

import { atom } from 'recoil';

const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

export const { persistAtom } = recoilPersist({
  key: 'resignIdState',
  storage: sessionStorage,
});

export const resignIdState = atom<number>({
  key: 'resignIdState',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
