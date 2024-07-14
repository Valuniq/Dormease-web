import { recoilPersist } from 'recoil-persist';

import { atom } from 'recoil';

const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

export const { persistAtom } = recoilPersist({
  key: 'buildingSettingIdState',
  storage: sessionStorage,
});

export const buildingSettingIdState = atom<number>({
  key: 'buildingSettingIdState',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
