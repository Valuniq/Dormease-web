import { recoilPersist } from 'recoil-persist';

import { atom } from 'recoil';

const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

export const { persistAtom } = recoilPersist({
  key: 'settingIdState',
  storage: sessionStorage,
});

export const settingIdState = atom<number>({
  key: 'settingIdState',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
