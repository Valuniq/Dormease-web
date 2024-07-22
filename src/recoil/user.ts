import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const accessTokenState = atom<string | null>({
  key: 'accessTokenState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const refreshTokenState = atom<string | null>({
  key: 'refreshTokenState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});
