import { atom } from 'recoil';

export const accessTokenState = atom<string | null>({
  key: 'accessTokenState',
  default: null,
});

export const refreshTokenState = atom<string | null>({
  key: 'refreshTokenState',
  default: null,
});
