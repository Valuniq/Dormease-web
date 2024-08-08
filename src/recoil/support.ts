import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const supportIdState = atom<number>({
  key: 'supportIdState',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
