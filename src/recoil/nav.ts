import { atom } from 'recoil';

export const navState = atom<boolean>({
  key: 'navState',
  default: false,
});

export const editState = atom<boolean>({
  key: 'editState',
  default: false,
});

//페이지 이동 경로
export const targetRouteState = atom<string>({
  key: 'targetRouteState',
  default: '',
});
